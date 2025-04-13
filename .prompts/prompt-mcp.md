# Prompt para Gerar MCP.mdc

## Objetivo

Este prompt é usado para gerar um arquivo `mcp.mdc` que documenta as diretrizes para implementar e interagir com o servidor MCP (Master Control Program) do Task Master. O arquivo gerado segue o padrão das regras Cursor e fornece orientações claras sobre a arquitetura do MCP e suas ferramentas.

## Instruções para Uso

1. Substitua `[CAMINHO_DO_PROJETO]` pelo caminho absoluto da pasta do seu projeto
2. Execute este prompt em uma ferramenta de IA como Claude ou ChatGPT
3. Revise e ajuste o conteúdo gerado antes de salvá-lo como `.cursor/rules/mcp.mdc`

## Prompt

````
Analise o código-fonte localizado em [CAMINHO_DO_PROJETO] para entender a implementação e interação com o servidor MCP (Master Control Program) do Task Master, e crie um documento Markdown que descreva as diretrizes para implementar e usar o MCP, seguindo o formato de regras Cursor.

O documento deve:

1. Explicar o conceito e propósito do servidor MCP no contexto do Task Master
2. Descrever a arquitetura do servidor MCP e seus componentes principais
3. Detalhar o processo de implementação de novas ferramentas MCP
4. Explicar como as ferramentas MCP se relacionam com os comandos CLI correspondentes
5. Fornecer orientações sobre o processamento de solicitações e respostas
6. Explicar como lidar com operações assíncronas e tratamento de erros
7. Incluir exemplos de implementação de ferramentas MCP bem estruturadas
8. Seguir o formato de regras Cursor:
   - Usar marcadores para pontos principais
   - Destacar em negrito os conceitos importantes
   - Incluir exemplos de código relevantes em blocos de código
   - Referenciar outros arquivos no formato `[nome_arquivo](mdc:caminho/do/arquivo)`

O documento deve ter um formato semelhante a:

```markdown
---
description: Diretrizes para implementar e interagir com o servidor MCP do Task Master
---

# Servidor MCP (Master Control Program)

- **Visão Geral do MCP**
  - Propósito e função no ecossistema Task Master
  - Vantagens sobre interação via CLI direta
  - Casos de uso principais

- **Arquitetura do MCP**
  - **Componentes Principais**
    - Servidor
    - Gerenciador de solicitações
    - Adaptadores de ferramenta
    - Gerenciamento de estado
  - **Fluxo de Dados**
    - Diagramas de sequência para operações típicas
    - Ciclo de vida das solicitações

- **Implementação de Ferramentas MCP**
  - **Estrutura Básica**
    ```typescript
    // Exemplo de definição de ferramenta MCP
    export async function toolName(params: {
      param1: string;
      param2: number;
      // outros parâmetros...
    }): Promise<Result> {
      // implementação
    }
    ```
  - **Validação de Parâmetros**
    - Verificações de entrada recomendadas
    - Tratamento de valores padrão
  - **Conversão CLI-MCP**
    - Mapeamento entre parâmetros CLI e parâmetros de ferramenta
    - Considerações sobre tipos de dados

- **Processamento Assíncrono**
  - Lidando com operações de longa duração
  - Estratégias para comunicar progresso
  - Gerenciamento de timeout

- **Tratamento de Erros**
  - Padrões de erro
  - Recuperação de falhas
  - Logging e diagnóstico

- **Exemplos do Projeto**
  - **Ferramenta A**
    - Propósito e uso
    - Pontos importantes da implementação
  - **Ferramenta B**
    - Propósito e uso
    - Pontos importantes da implementação

- **Melhores Práticas**
  - Considerações de desempenho
  - Gerenciamento de memória
  - Testes de ferramentas MCP
````

Por favor, analise o código-fonte relacionado ao servidor MCP para criar diretrizes precisas e úteis que reflitam as práticas e estruturas reais utilizadas no projeto atual.

```

---

## Exemplo de Uso
Para gerar um documento de diretrizes do servidor MCP para um projeto localizado em `/Users/meunome/projetos/minha-aplicacao`:

1. Copie o conteúdo do prompt
2. Substitua `[CAMINHO_DO_PROJETO]` por `/Users/meunome/projetos/minha-aplicacao`
3. Execute o prompt com uma ferramenta de IA
4. Revise o resultado e salve-o como `.cursor/rules/mcp.mdc`
```
