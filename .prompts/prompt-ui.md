# Prompt para Gerar UI.mdc

## Objetivo

Este prompt é usado para gerar um arquivo `ui.mdc` que documenta as diretrizes para implementar e manter componentes de interface do usuário para o Task Master CLI. O arquivo gerado segue o padrão das regras Cursor e fornece orientações claras sobre como criar interfaces de linha de comando consistentes e amigáveis.

## Instruções para Uso

1. Substitua `[CAMINHO_DO_PROJETO]` pelo caminho absoluto da pasta do seu projeto
2. Execute este prompt em uma ferramenta de IA como Claude ou ChatGPT
3. Revise e ajuste o conteúdo gerado antes de salvá-lo como `.cursor/rules/ui.mdc`

## Prompt

````
Analise o código-fonte localizado em [CAMINHO_DO_PROJETO], com foco particular nos componentes de interface do usuário (CLI), e crie um documento Markdown que descreva as diretrizes para implementar e manter componentes de UI, seguindo o formato de regras Cursor.

O documento deve:

1. Explicar os princípios de design da interface de linha de comando
2. Detalhar a estrutura e organização dos componentes de UI no projeto
3. Explicar as bibliotecas e ferramentas utilizadas para a interface do usuário
4. Fornecer diretrizes para formatação e estilo de saída no terminal
5. Explicar as convenções para mensagens de erro, sucesso e informação
6. Descrever o tratamento de input do usuário e validação
7. Incluir exemplos concretos de bons componentes de UI do código atual
8. Seguir o formato de regras Cursor:
   - Usar marcadores para pontos principais
   - Destacar em negrito os conceitos importantes
   - Incluir exemplos de código relevantes em blocos de código
   - Referenciar outros arquivos no formato `[nome_arquivo](mdc:caminho/do/arquivo)`

O documento deve ter um formato semelhante a:

```markdown
---
description: Diretrizes para implementar e manter componentes de interface do usuário para o Task Master CLI
---

# Interface do Usuário

- **Princípios de Design CLI**
  - **Consistência**
    - Padrões de comando uniformes
    - Terminologia consistente em toda a aplicação
  - **Feedback Claro**
    - Confirmação de ações bem-sucedidas
    - Mensagens de erro informativas
  - **Progressão**
    - Indicadores para operações longas
    - Feedback incremental quando apropriado

- **Estrutura de Componentes UI**
  - **Organização de Código**
    - Localização dos componentes de UI
    - Separação de lógica e apresentação
  - **Componentes Reutilizáveis**
    - Helpers de formatação
    - Wrappers para entrada/saída

- **Bibliotecas UI**
  - **Frameworks Principais**
    - Chalk, Inquirer, Commander, etc.
    - Propósito e escopo de cada biblioteca
  - **Wrappers Personalizados**
    - Abstrações internas sobre bibliotecas externas
    - Quando e como usar

- **Formatação de Saída**
  - **Esquema de Cores**
    ```typescript
    // Exemplo de uso de cores consistentes
    import chalk from 'chalk';

    // Cores para tipos específicos de mensagem
    export const colors = {
      success: chalk.green,
      warning: chalk.yellow,
      error: chalk.red,
      info: chalk.blue,
      highlight: chalk.cyan,
    };

    // Uso
    console.log(colors.success('Tarefa criada com sucesso!'));
    ```
  - **Estrutura de Mensagens**
    - Prefixos e símbolos padrão
    - Formatação de dados tabulares
    - Indentação e espaçamento

- **Mensagens ao Usuário**
  - **Mensagens de Erro**
    - Formato padrão de mensagens de erro
    - Incluir códigos de erro quando apropriado
    - Fornecer dicas de resolução
  - **Confirmações e Sucessos**
    - Convenções para confirmação de ações
    - Níveis de detalhe apropriados

- **Entrada do Usuário**
  - **Prompts e Questões**
    - Formatação de prompts
    - Validação de entrada
    - Valores padrão e autocompletar
  - **Argumentos e Opções**
    - Consistência nos nomes de opções
    - Aliases curtos vs. nomes longos

- **Fluxos de Interface**
  - **Fluxos Interativos**
    - Navegação em menus
    - Confirmações antes de ações destrutivas
  - **Modo Não-Interativo**
    - Suporte para scripts e automação
    - Flags como --yes para pular confirmações

- **Exemplos do Projeto**
  - **Componente X**
    - Propósito e uso
    - Pontos importantes da implementação
  - **Componente Y**
    - Propósito e uso
    - Pontos importantes da implementação
````

Por favor, analise o código-fonte com foco nos componentes de interface do usuário (CLI) para criar diretrizes precisas e úteis que reflitam as práticas e estruturas de UI reais utilizadas no projeto.

```

---

## Exemplo de Uso
Para gerar um documento de diretrizes de interface do usuário para um projeto localizado em `/Users/meunome/projetos/minha-aplicacao`:

1. Copie o conteúdo do prompt
2. Substitua `[CAMINHO_DO_PROJETO]` por `/Users/meunome/projetos/minha-aplicacao`
3. Execute o prompt com uma ferramenta de IA
4. Revise o resultado e salve-o como `.cursor/rules/ui.mdc`
```
