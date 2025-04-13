# Prompt para Gerar Taskmaster.mdc

## Objetivo

Este prompt é usado para gerar um arquivo `taskmaster.mdc` que fornece uma referência completa para as ferramentas MCP e comandos CLI do Task Master. O arquivo gerado segue o padrão das regras Cursor e serve como documentação detalhada de todas as funcionalidades disponíveis.

## Instruções para Uso

1. Substitua `[CAMINHO_DO_PROJETO]` pelo caminho absoluto da pasta do seu projeto
2. Execute este prompt em uma ferramenta de IA como Claude ou ChatGPT
3. Revise e ajuste o conteúdo gerado antes de salvá-lo como `.cursor/rules/taskmaster.mdc`

## Prompt

````
Analise o código-fonte localizado em [CAMINHO_DO_PROJETO] para identificar todas as ferramentas MCP e comandos CLI disponíveis no Task Master, e crie um documento Markdown que forneça uma referência completa para essas funcionalidades, seguindo o formato de regras Cursor.

O documento deve:

1. Listar e explicar todas as ferramentas MCP e seus comandos CLI correspondentes
2. Agrupar as ferramentas/comandos por categoria funcional (ex: inicialização, gerenciamento de tarefas, etc.)
3. Para cada ferramenta/comando, incluir:
   - Nome e descrição
   - Parâmetros/opções e suas descrições
   - Exemplos de uso
   - Notas relevantes ou avisos
   - Variantes específicas para MCP vs CLI
4. Explicar as variáveis de ambiente e configurações que afetam o comportamento
5. Seguir o formato de regras Cursor:
   - Usar marcadores para pontos principais
   - Destacar em negrito os conceitos importantes
   - Incluir exemplos de código relevantes em blocos de código
   - Referenciar outros arquivos no formato `[nome_arquivo](mdc:caminho/do/arquivo)`

O documento deve ter um formato semelhante a:

```markdown
---
description: Referência completa para ferramentas MCP e comandos CLI do Task Master
---

# Referência de Ferramentas e Comandos do Task Master

Este documento fornece uma referência detalhada para interagir com o Task Master, cobrindo tanto as ferramentas MCP (recomendadas para integrações como o Cursor) quanto os comandos CLI correspondentes (para interação direta ou fallback).

**Nota:** Para interações programáticas ou via ferramentas integradas, o uso das **ferramentas MCP é fortemente recomendado** devido ao melhor desempenho, dados estruturados e tratamento de erros. Os comandos CLI servem como alternativa amigável e fallback.

---

## Inicialização e Configuração

### 1. Inicializar Projeto (`init`)

*   **Ferramenta MCP:** `initialize_project`
*   **Comando CLI:** `task-master init [opções]`
*   **Descrição:** `Configurar a estrutura básica de arquivos e configuração do Task Master no diretório atual para um novo projeto.`
*   **Opções CLI Principais:**
    *   `--name <nome>`: `Definir o nome do projeto na configuração do Task Master.`
    *   `--description <texto>`: `Fornecer uma descrição breve para o projeto.`
    *   `--version <versão>`: `Definir a versão inicial para o projeto (ex: '0.1.0').`
    *   `-y, --yes`: `Inicializar o Task Master rapidamente usando configurações padrão sem prompts interativos.`
*   **Uso:** Execute isso uma vez no início de um novo projeto.
*   **Parâmetros/Opções MCP Principais:**
    *   `projectName`: `Definir o nome do projeto.` (CLI: `--name <nome>`)
    *   `projectDescription`: `Fornecer uma descrição breve para o projeto.` (CLI: `--description <texto>`)
    *   `projectVersion`: `Definir a versão inicial para o projeto (ex: '0.1.0').` (CLI: `--version <versão>`)
    *   `yes`: `Pular prompts e usar padrões/argumentos fornecidos (padrão: false).` (CLI: `-y, --yes`)
*   **Exemplo de uso:** `task-master init --name='Meu Projeto' --description='Um projeto incrível'`

### 2. Processar PRD (`parse_prd`)

*   **Ferramenta MCP:** `parse_prd`
*   **Comando CLI:** `task-master parse-prd [arquivo] [opções]`
*   **Descrição:** `Analisar um Documento de Requisitos de Produto (PRD) ou arquivo de texto com Task Master para gerar automaticamente um conjunto inicial de tarefas em tasks.json.`
*   **Parâmetros/Opções Principais:**
    *   `input`: `Caminho para o arquivo PRD ou de requisitos que o Task Master deve analisar para tarefas.` (CLI: `[arquivo]` posicional ou `-i, --input <arquivo>`)
    *   `output`: `Especificar onde o Task Master deve salvar o arquivo 'tasks.json' gerado (padrão: 'tasks/tasks.json').` (CLI: `-o, --output <arquivo>`)
    *   `numTasks`: `Número aproximado de tarefas de alto nível que o Task Master deve tentar gerar do documento.` (CLI: `-n, --num-tasks <número>`)
    *   `force`: `Permitir que o Task Master sobrescreva um 'tasks.json' existente sem pedir confirmação.` (CLI: `-f, --force`)
*   **Uso:** Útil para iniciar um projeto a partir de um documento de requisitos existente.
*   **Exemplo de uso:** `task-master parse-prd --input='requisitos.txt' --num-tasks=15`

---

## Listagem e Visualização de Tarefas

### 3. Obter Tarefas (`get_tasks`)

*   **Ferramenta MCP:** `get_tasks`
*   **Comando CLI:** `task-master list [opções]`
*   **Descrição:** `Listar suas tarefas do Task Master, opcionalmente filtrando por status e mostrando subtarefas.`
*   **Parâmetros/Opções Principais:**
    *   `status`: `Mostrar apenas tarefas do Task Master que correspondem a este status (ex: 'pending', 'done').` (CLI: `-s, --status <status>`)
    *   `withSubtasks`: `Incluir subtarefas indentadas sob suas tarefas pai na lista.` (CLI: `--with-subtasks`)
    *   `file`: `Caminho para o arquivo 'tasks.json' do Task Master (o padrão depende de auto-detecção).` (CLI: `-f, --file <arquivo>`)
*   **Uso:** Obter uma visão geral do status do projeto, frequentemente usado no início de uma sessão de trabalho.
*   **Exemplo de uso:** `task-master list --status=pending --with-subtasks`

### 4. Obter Próxima Tarefa (`next_task`)

*   **Ferramenta MCP:** `next_task`
*   **Comando CLI:** `task-master next [opções]`
*   **Descrição:** `Pedir ao Task Master para mostrar a próxima tarefa disponível que você pode trabalhar, com base no status e dependências concluídas.`
*   **Parâmetros/Opções Principais:**
    *   `file`: `Caminho para o arquivo 'tasks.json' do Task Master (o padrão depende de auto-detecção).` (CLI: `-f, --file <arquivo>`)
*   **Uso:** Identificar o que trabalhar a seguir de acordo com o plano.
*   **Exemplo de uso:** `task-master next`

### 5. Obter Detalhes da Tarefa (`get_task`)

*   **Ferramenta MCP:** `get_task`
*   **Comando CLI:** `task-master show [id] [opções]`
*   **Descrição:** `Exibir informações detalhadas para uma tarefa ou subtarefa específica do Task Master pelo seu ID.`
*   **Parâmetros/Opções Principais:**
    *   `id`: `Obrigatório. O ID da tarefa (ex: '15') ou subtarefa (ex: '15.2') do Task Master que você deseja visualizar.` (CLI: `[id]` posicional ou `-i, --id <id>`)
    *   `file`: `Caminho para o arquivo 'tasks.json' do Task Master (o padrão depende de auto-detecção).` (CLI: `-f, --file <arquivo>`)
*   **Uso:** Entender os detalhes completos, notas de implementação e estratégia de teste para uma tarefa específica antes de começar a trabalhar.
*   **Exemplo de uso:** `task-master show 15` ou `task-master show 15.2` para uma subtarefa
````

Por favor, analise o código-fonte para identificar todas as ferramentas MCP e comandos CLI disponíveis, junto com seus parâmetros, opções e exemplos de uso, para criar uma referência completa e precisa das funcionalidades do Task Master.

Organize as ferramentas e comandos em categorias lógicas, como:

- Inicialização e Configuração
- Listagem e Visualização de Tarefas
- Criação e Modificação de Tarefas
- Estrutura e Decomposição de Tarefas
- Gerenciamento de Dependências
- Análise e Relatórios

Para cada ferramenta/comando, forneça detalhes semelhantes ao exemplo acima, incluindo ferramenta MCP, comando CLI equivalente, descrição, parâmetros/opções, uso e exemplos.

```

---

## Exemplo de Uso
Para gerar um documento de referência completo do Task Master para um projeto localizado em `/Users/meunome/projetos/minha-aplicacao`:

1. Copie o conteúdo do prompt
2. Substitua `[CAMINHO_DO_PROJETO]` por `/Users/meunome/projetos/minha-aplicacao`
3. Execute o prompt com uma ferramenta de IA
4. Revise o resultado e salve-o como `.cursor/rules/taskmaster.mdc`
```
