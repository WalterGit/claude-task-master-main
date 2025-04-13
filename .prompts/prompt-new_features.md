# Prompt para Gerar New_Features.mdc

## Objetivo

Este prompt é usado para gerar um arquivo `new_features.mdc` que documenta as diretrizes para integrar novas funcionalidades no Task Master CLI. O arquivo gerado segue o padrão das regras Cursor e fornece orientações claras sobre como adicionar novos recursos mantendo a consistência e qualidade do projeto.

## Instruções para Uso

1. Substitua `[CAMINHO_DO_PROJETO]` pelo caminho absoluto da pasta do seu projeto
2. Execute este prompt em uma ferramenta de IA como Claude ou ChatGPT
3. Revise e ajuste o conteúdo gerado antes de salvá-lo como `.cursor/rules/new_features.mdc`

## Prompt

````
Analise o código-fonte localizado em [CAMINHO_DO_PROJETO] para entender o processo de desenvolvimento e adição de novas funcionalidades, e crie um documento Markdown que descreva as diretrizes para integrar novos recursos no Task Master, seguindo o formato de regras Cursor.

O documento deve:

1. Explicar o processo de planejamento e design de novas funcionalidades
2. Descrever o fluxo de trabalho para implementar novas funcionalidades
3. Detalhar as considerações para CLI e integração com servidor MCP
4. Explicar as práticas de testes recomendadas para novos recursos
5. Fornecer orientações sobre documentação de novas funcionalidades
6. Explicar o processo de revisão e integração de código
7. Descrever como atualizar a documentação relacionada
8. Incluir exemplos de adições de funcionalidades bem-sucedidas do passado
9. Seguir o formato de regras Cursor:
   - Usar marcadores para pontos principais
   - Destacar em negrito os conceitos importantes
   - Incluir exemplos de código relevantes em blocos de código
   - Referenciar outros arquivos no formato `[nome_arquivo](mdc:caminho/do/arquivo)`

O documento deve ter um formato semelhante a:

```markdown
---
description: Diretrizes para integrar novas funcionalidades no Task Master CLI
---

# Integração de Novas Funcionalidades

- **Processo de Planejamento**
  - Identificação de necessidades do usuário
  - Análise de impacto nas funcionalidades existentes
  - Definição clara de escopo e resultados esperados
  - Consulta às regras e padrões existentes

- **Ciclo de Desenvolvimento**
  - **Fase de Design**
    - Criar especificação técnica
    - Considerar interfaces de usuário (CLI e API)
    - Planejar estratégia de teste
  - **Fase de Implementação**
    - Seguir convenções de código existentes
    - Implementar em camadas (core, CLI, MCP)
    - Adicionar testes automatizados
  - **Fase de Revisão**
    - Critérios de aceitação
    - Processo de revisão de código
    - Validação de desempenho

- **Implementação Dual (CLI e MCP)**
  - Compartilhamento de lógica de negócios
  - Adaptação apropriada para cada interface
  ```typescript
  // Exemplo de implementação dual
  // 1. Função de núcleo compartilhada
  export async function coreFunction(params) {
    // Lógica de negócios comum
  }

  // 2. Adaptador CLI
  export function cliCommand(program) {
    program
      .command('feature')
      .option('--option <value>', 'description')
      .action(async (options) => {
        // Adaptação para CLI e chamada ao núcleo
        await coreFunction(adaptedParams);
      });
  }

  // 3. Ferramenta MCP
  export async function mcpTool(params) {
    // Validação específica do MCP
    // Chamada ao núcleo
    return await coreFunction(params);
  }
````

- **Testes e Qualidade**

  - Cobertura de testes recomendada
  - Testes de integração
  - Validação de experiência do usuário

- **Documentação**

  - Atualização de README e ajuda interna
  - Criação/atualização de regras Cursor
  - Exemplos de uso

- **Processo de Lançamento**

  - Criação de changesets
  - Considerações de compatibilidade
  - Comunicação de mudanças

- **Exemplos de Funcionalidades**
  - **Recurso X**
    - Abordagem adotada
    - Lições aprendidas
  - **Recurso Y**
    - Abordagem adotada
    - Lições aprendidas

```

Por favor, analise o código-fonte para entender os padrões atuais de desenvolvimento e adição de funcionalidades, e crie diretrizes precisas e úteis que reflitam as práticas reais utilizadas no projeto.
```

---

## Exemplo de Uso

Para gerar um documento de diretrizes para integração de novas funcionalidades para um projeto localizado em `/Users/meunome/projetos/minha-aplicacao`:

1. Copie o conteúdo do prompt
2. Substitua `[CAMINHO_DO_PROJETO]` por `/Users/meunome/projetos/minha-aplicacao`
3. Execute o prompt com uma ferramenta de IA
4. Revise o resultado e salve-o como `.cursor/rules/new_features.mdc`
