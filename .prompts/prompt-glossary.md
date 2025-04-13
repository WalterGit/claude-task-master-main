# Prompt para Gerar Glossary.mdc

## Objetivo

Este prompt é usado para gerar um arquivo `glossary.mdc` que contém um glossário das regras Cursor existentes no projeto. O arquivo gerado fornece uma referência rápida para o propósito de cada regra, facilitando a navegação pela documentação do projeto.

## Instruções para Uso

1. Substitua `[CAMINHO_DO_PROJETO]` pelo caminho absoluto da pasta do seu projeto
2. Execute este prompt em uma ferramenta de IA como Claude ou ChatGPT
3. Revise e ajuste o conteúdo gerado antes de salvá-lo como `.cursor/rules/glossary.mdc`

## Prompt

````
Analise o diretório de regras Cursor em [CAMINHO_DO_PROJETO]/.cursor/rules (se existir) e crie um documento Markdown que contenha um glossário conciso de todas as regras existentes, seguindo o formato de regras Cursor.

O documento deve:

1. Listar todas as regras Cursor encontradas no diretório .cursor/rules
2. Fornecer uma descrição breve e concisa de cada regra
3. Organizar as regras em ordem alfabética para facilitar a consulta
4. Incluir links para cada arquivo de regra usando o formato apropriado
5. Seguir o formato de regras Cursor:
   - Usar marcadores para listar cada regra
   - Destacar os nomes das regras em negrito ou como parte do link
   - Referenciar outros arquivos no formato `[nome_arquivo](mdc:caminho/do/arquivo)`

O documento deve ter um formato semelhante a:

```markdown
---
description: Glossário das regras Cursor do Task Master
---

# Glossário de Regras Cursor do Task Master

Este arquivo fornece uma referência rápida para o propósito de cada regra localizada no diretório `.cursor/rules`.

- **[`architecture.mdc`](mdc:.cursor/rules/architecture.mdc)**: Descreve a arquitetura de alto nível da aplicação.
- **[`changeset.mdc`](mdc:.cursor/rules/changeset.mdc)**: Diretrizes para usar Changesets para gerenciar versões e changelogs.
- **[`commands.mdc`](mdc:.cursor/rules/commands.mdc)**: Diretrizes para implementar comandos CLI usando Commander.js.
- **[`cursor_rules.mdc`](mdc:.cursor/rules/cursor_rules.mdc)**: Diretrizes para criar e manter regras Cursor.
- **[`dependencies.mdc`](mdc:.cursor/rules/dependencies.mdc)**: Diretrizes para gerenciar dependências entre tarefas.
- **[`dev_workflow.mdc`](mdc:.cursor/rules/dev_workflow.mdc)**: Guia para usar o Task Master em workflows de desenvolvimento.
- **[`glossary.mdc`](mdc:.cursor/rules/glossary.mdc)**: Este arquivo; fornece um glossário de outras regras Cursor.
- **[`mcp.mdc`](mdc:.cursor/rules/mcp.mdc)**: Diretrizes para implementar e interagir com o servidor MCP.
- **[`new_features.mdc`](mdc:.cursor/rules/new_features.mdc)**: Diretrizes para integrar novas funcionalidades.
- **[`self_improve.mdc`](mdc:.cursor/rules/self_improve.mdc)**: Diretrizes para melhorar continuamente as regras Cursor.
- **[`taskmaster.mdc`](mdc:.cursor/rules/taskmaster.mdc)**: Referência completa para ferramentas MCP e comandos CLI.
- **[`tasks.mdc`](mdc:.cursor/rules/tasks.mdc)**: Diretrizes para operações de gerenciamento de tarefas.
- **[`tests.mdc`](mdc:.cursor/rules/tests.mdc)**: Diretrizes para implementar e manter testes.
- **[`ui.mdc`](mdc:.cursor/rules/ui.mdc)**: Diretrizes para implementar componentes de interface do usuário.
- **[`utilities.mdc`](mdc:.cursor/rules/utilities.mdc)**: Diretrizes para implementar funções utilitárias.
````

Se o diretório `.cursor/rules` não existir ou estiver vazio, crie uma entrada para cada um dos arquivos que você planeja criar (architecture.mdc, changeset.mdc, etc.) com descrições adequadas baseadas nos nomes dos arquivos.

Por favor, certifique-se de que as descrições refletem precisamente o conteúdo de cada regra, examinando os arquivos existentes para entender seu propósito. Se algum arquivo adicional estiver presente no diretório, inclua-o também no glossário com uma descrição apropriada.

```

---

## Exemplo de Uso
Para gerar um glossário de regras Cursor para um projeto localizado em `/Users/meunome/projetos/minha-aplicacao`:

1. Copie o conteúdo do prompt
2. Substitua `[CAMINHO_DO_PROJETO]` por `/Users/meunome/projetos/minha-aplicacao`
3. Execute o prompt com uma ferramenta de IA
4. Revise o resultado e salve-o como `.cursor/rules/glossary.mdc`
```
