# Prompt para Gerar Dependencies.mdc

## Objetivo

Este prompt é usado para gerar um arquivo `dependencies.mdc` que documenta as diretrizes para gerenciar dependências e relacionamentos entre tarefas no sistema. O arquivo gerado segue o padrão das regras Cursor e fornece orientações claras sobre como definir, gerenciar e resolver dependências.

## Instruções para Uso

1. Substitua `[CAMINHO_DO_PROJETO]` pelo caminho absoluto da pasta do seu projeto
2. Execute este prompt em uma ferramenta de IA como Claude ou ChatGPT
3. Revise e ajuste o conteúdo gerado antes de salvá-lo como `.cursor/rules/dependencies.mdc`

## Prompt

````
Analise o código-fonte localizado em [CAMINHO_DO_PROJETO] para entender como as dependências entre tarefas são gerenciadas, e crie um documento Markdown que descreva as diretrizes para gerenciar dependências e relacionamentos entre tarefas, seguindo o formato de regras Cursor.

O documento deve:

1. Explicar o conceito de dependências entre tarefas e sua importância
2. Descrever como as dependências são representadas no sistema (estrutura de dados)
3. Detalhar como adicionar, remover e validar dependências
4. Explicar como evitar problemas comuns como dependências circulares
5. Fornecer orientações sobre quando e como estabelecer dependências entre tarefas
6. Explicar como o sistema utiliza informações de dependência para ordenar tarefas
7. Incluir exemplos concretos de boas práticas de dependências
8. Seguir o formato de regras Cursor:
   - Usar marcadores para pontos principais
   - Destacar em negrito os conceitos importantes
   - Incluir exemplos de código relevantes em blocos de código
   - Referenciar outros arquivos no formato `[nome_arquivo](mdc:caminho/do/arquivo)`

O documento deve ter um formato semelhante a:

```markdown
---
description: Diretrizes para gerenciar dependências e relacionamentos entre tarefas
---

# Gerenciamento de Dependências

- **Conceito de Dependências**
  - Definição e propósito
  - Impacto no fluxo de trabalho
  - Visualização de dependências na interface

- **Estrutura de Dados**
  - Como as dependências são armazenadas
  - Modelo de objeto das dependências
  ```typescript
  // Exemplo de estrutura de dados
  interface Task {
    id: string;
    dependencies: string[];  // IDs das tarefas dependentes
    // outros campos...
  }
````

- **Adicionando Dependências**

  - Processo recomendado
  - Verificações de validação
  - Considerações ao adicionar novas dependências

- **Removendo Dependências**

  - Quando remover dependências
  - Impacto da remoção
  - Atualizações necessárias

- **Validação de Dependências**

  - Verificação de dependências circulares
  - Verificação de dependências inexistentes
  - Lidando com erros de validação

- **Boas Práticas**

  - ✅ Exemplos de dependências bem definidas
  - ❌ Exemplos de problemas a evitar
  - Recomendações para organização eficiente

- **Uso no Sistema**
  - Como as dependências afetam a ordem de execução
  - Cálculo de próximas tarefas
  - Visualização do grafo de dependências

```

Por favor, analise o código-fonte para entender como as dependências são gerenciadas no projeto atual, e crie diretrizes precisas e úteis que reflitam as práticas e estruturas reais utilizadas.
```

---

## Exemplo de Uso

Para gerar um documento de diretrizes de gerenciamento de dependências para um projeto localizado em `/Users/meunome/projetos/minha-aplicacao`:

1. Copie o conteúdo do prompt
2. Substitua `[CAMINHO_DO_PROJETO]` por `/Users/meunome/projetos/minha-aplicacao`
3. Execute o prompt com uma ferramenta de IA
4. Revise o resultado e salve-o como `.cursor/rules/dependencies.mdc`
