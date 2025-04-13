import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { FastMCP } from "fastmcp";
import { asyncOperationManager } from "./core/utils/async-manager.js";
import logger from "./logger.js";
import { registerTaskMasterTools } from "./tools/index.js";

// Load environment variables
dotenv.config();

// Constants
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Main MCP server class that integrates with Task Master
 */
class TaskMasterMCPServer {
	constructor() {
		// Get version from package.json using synchronous fs
		const packagePath = path.join(__dirname, "../../package.json");
		const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));

		this.options = {
			name: "Task Master MCP Server",
			version: packageJson.version,
		};

		this.server = new FastMCP(this.options);
		this.initialized = false;

		this.server.addResource({});

		this.server.addResourceTemplate({});

		// Make the manager accessible (e.g., pass it to tool registration)
		this.asyncManager = asyncOperationManager;

		// Bind methods
		this.init = this.init.bind(this);
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);

		// Setup logging
		this.logger = logger;
	}

	/**
	 * Initialize the MCP server with necessary tools and routes
	 */
	async init() {
		if (this.initialized) return;

		// Pass the manager instance to the tool registration function
		registerTaskMasterTools(this.server, this.asyncManager);

		this.initialized = true;

		return this;
	}

	/**
	 * Start the MCP server
	 */
	async start() {
		if (!this.initialized) {
			await this.init();
		}

		// Get port from environment variable or use default
		const port = process.env.PORT || 3000;
		const host = process.env.HOST || "0.0.0.0";

		// Start the FastMCP server with HTTP transport
		await this.server.start({
			transportType: "http",
			httpOptions: {
				port,
				host,
				cors: true, // Enable CORS for cross-origin requests
			},
			timeout: 120000, // 2 minutes timeout (in milliseconds)
		});

		this.logger.info(`MCP Server running at http://${host}:${port}`);

		return this;
	}

	/**
	 * Stop the MCP server
	 */
	async stop() {
		if (this.server) {
			await this.server.stop();
		}
	}
}

// Export the manager from here as well, if needed elsewhere
export { asyncOperationManager };

export default TaskMasterMCPServer;
