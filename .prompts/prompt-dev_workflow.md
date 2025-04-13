# Prompt para Gerar Dev_Workflow.mdc

## Objetivo

Este prompt é usado para gerar um arquivo `dev_workflow.mdc` que documenta o fluxo de desenvolvimento usando o Task Master. O arquivo gerado segue o padrão das regras Cursor e fornece um guia completo sobre como usar o Task Master para gerenciar projetos de desenvolvimento de software.

## Instruções para Uso

1. Substitua `[CAMINHO_DO_PROJETO]` pelo caminho absoluto da pasta do seu projeto
2. Execute este prompt em uma ferramenta de IA como Claude ou ChatGPT
3. Revise e ajuste o conteúdo gerado antes de salvá-lo como `.cursor/rules/dev_workflow.mdc`

## Prompt

````
Analise o código-fonte localizado em [CAMINHO_DO_PROJETO] para entender como o sistema Task Master é usado para gerenciar o desenvolvimento de software, e crie um documento Markdown que descreva o fluxo de trabalho de desenvolvimento recomendado, seguindo o formato de regras Cursor.

O documento deve:

1. Explicar os métodos primários de interação com o Task Master (MCP Server vs CLI)
2. Detalhar o processo padrão de fluxo de trabalho de desenvolvimento
3. Explicar como analisar a complexidade das tarefas e quebrar tarefas complexas
4. Fornecer diretrizes para lidar com deriva de implementação
5. Explicar como gerenciar status de tarefas
6. Descrever os campos da estrutura de tarefas e seu uso
7. Explicar a configuração de variáveis de ambiente
8. Fornecer detalhes sobre como determinar a próxima tarefa, visualizar detalhes de tarefas e gerenciar dependências
9. Descrever o processo iterativo de implementação de subtarefas
10. Incluir técnicas de análise e refatoração de código
11. Seguir o formato de regras Cursor:
    - Usar marcadores para pontos principais
    - Destacar em negrito os conceitos importantes
    - Incluir exemplos de código/comandos relevantes em blocos de código
    - Referenciar outros arquivos no formato `[nome_arquivo](mdc:caminho/do/arquivo)`

O documento deve ter um formato semelhante a:

```markdown
---
description: Guia para usar o Task Master para gerenciar fluxos de trabalho de desenvolvimento baseados em tarefas
---

# Fluxo de Trabalho de Desenvolvimento com Task Master

## Interação Primária: MCP Server vs. CLI

- **MCP Server (Recomendado para Ferramentas Integradas)**:
  - Vantagens do servidor MCP
  - Ferramentas disponíveis
  - Integração com ambientes de desenvolvimento

- **CLI Task Master (Para Usuários e Fallback)**:
  - Comandos disponíveis
  - Instalação e configuração
  - Quando usar a CLI em vez do servidor MCP

## Processo Padrão de Fluxo de Trabalho

- Iniciar novos projetos com `init` ou `parse-prd`
- Listar tarefas com `get_tasks`
- Determinar a próxima tarefa com `next_task`
- Analisar complexidade antes de decompor tarefas
- Processo completo passo a passo

## Análise de Complexidade de Tarefas

- Como executar análise de complexidade
- Interpretar relatórios de complexidade
- Usar os resultados para determinar a alocação de subtarefas

## Processo de Decomposição de Tarefas

- Expansão de tarefas com análise de complexidade
- Expansão manual com número específico de subtarefas
- Uso de flags de pesquisa e prompts de contexto
- Regeneração de subtarefas

## Gerenciamento de Deriva de Implementação

- Quando a implementação difere da abordagem planejada
- Atualização de tarefas futuras baseada em escolhas atuais
- Gerenciamento de novas dependências ou requisitos

## Gerenciamento de Status de Tarefas

- Status disponíveis e seu significado
- Quando e como mudar o status de uma tarefa
- Valores de status personalizados para fluxos de trabalho específicos

## Implementação Iterativa de Subtarefas

1. **Entendendo o Objetivo**
   - Uso de `get_task` para entender requisitos

2. **Exploração e Planejamento Iniciais**
   - Exploração do código-base
   - Identificação de arquivos e funções a modificar

3. **Documentação do Plano**
   - Uso de `update_subtask` para registrar detalhes do plano

4. **Implementação e Registro de Progresso**
   - Documentação contínua do progresso
   - Registro de descobertas, problemas e soluções
````

Por favor, analise o código-fonte e qualquer documentação existente para criar um guia completo e preciso que reflita as práticas recomendadas para usar o Task Master no desenvolvimento de software, adaptando-o especificamente ao projeto em questão.

```

---

## Exemplo de Uso
Para gerar um documento de fluxo de trabalho de desenvolvimento para um projeto localizado em `/Users/meunome/projetos/minha-aplicacao`:

1. Copie o conteúdo do prompt
2. Substitua `[CAMINHO_DO_PROJETO]` por `/Users/meunome/projetos/minha-aplicacao`
3. Execute o prompt com uma ferramenta de IA
4. Revise o resultado e salve-o como `.cursor/rules/dev_workflow.mdc`
```
