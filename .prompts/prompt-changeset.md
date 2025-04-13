# Prompt para Gerar Changeset.mdc

## Objetivo

Este prompt é usado para gerar um arquivo `changeset.mdc` que documenta as diretrizes para usar Changesets para gerenciar versões e changelogs da aplicação. O arquivo gerado segue o padrão das regras Cursor e fornece orientações claras sobre como e quando usar changesets no projeto.

## Instruções para Uso

1. Substitua `[CAMINHO_DO_PROJETO]` pelo caminho absoluto da pasta do seu projeto
2. Execute este prompt em uma ferramenta de IA como Claude ou ChatGPT
3. Revise e ajuste o conteúdo gerado antes de salvá-lo como `.cursor/rules/changeset.mdc`

## Prompt

````
Analise o código-fonte localizado em [CAMINHO_DO_PROJETO] para entender seu sistema de gerenciamento de versões e crie um documento Markdown que descreva as diretrizes para usar Changesets (ou sistema similar) para gerenciar versões e changelogs, seguindo o formato de regras Cursor.

O documento deve:

1. Explicar o propósito do gerenciamento de versões e changelogs na aplicação
2. Detalhar quando um desenvolvedor deve criar um changeset durante o desenvolvimento
3. Explicar o processo de criação de um changeset (comandos específicos, fluxo de trabalho)
4. Distinguir entre diferentes tipos de mudanças (major, minor, patch) e quando usar cada um
5. Descrever o formato e conteúdo esperado das mensagens de changeset
6. Explicar como os changesets são combinados em changelogs durante o processo de release
7. Incluir exemplos práticos de bons e maus usos de changesets
8. Seguir o formato de regras Cursor:
   - Usar marcadores para pontos principais
   - Destacar em negrito os conceitos importantes
   - Incluir exemplos de código relevantes em blocos de código
   - Referenciar outros arquivos no formato `[nome_arquivo](mdc:caminho/do/arquivo)`

O documento deve ter um formato semelhante a:

```markdown
---
description: Diretrizes para usar Changesets para gerenciar versões e changelogs
---

# Workflow de Changesets

- **Propósito dos Changesets**
  - Gerenciamento consistente de versões
  - Geração automática de changelogs
  - Comunicação clara de mudanças para usuários

- **Quando Criar um Changeset**
  - Após implementar uma nova funcionalidade
  - Após corrigir um bug
  - Após fazer mudanças que afetam a API pública
  - Situações em que NÃO se deve criar um changeset

- **Processo de Criação**
  - Comando: `npm run changeset` (ou equivalente)
  - Etapas do processo interativo
  - Integração com o fluxo de trabalho git

- **Tipos de Mudanças**
  - **Major**: Mudanças incompatíveis com versões anteriores
  - **Minor**: Novas funcionalidades compatíveis
  - **Patch**: Correções de bugs e pequenos ajustes

- **Formato das Mensagens**
  - Diretrizes para escrever boas mensagens
  - ✅ Exemplos de boas mensagens
  - ❌ Exemplos de mensagens inadequadas

- **Processo de Release**
  - Como os changesets são usados durante um release
  - Comandos relevantes de release
  - Fluxo completo de trabalho

- **Exemplos Práticos**
  ```bash
  # Exemplo de comando e saída
````

```

Por favor, analise o código-fonte e qualquer documentação existente sobre o gerenciamento de versões para criar diretrizes precisas e úteis, adaptadas especificamente ao projeto em questão.
```

---

## Exemplo de Uso

Para gerar um documento de diretrizes de changeset para um projeto localizado em `/Users/meunome/projetos/minha-aplicacao`:

1. Copie o conteúdo do prompt
2. Substitua `[CAMINHO_DO_PROJETO]` por `/Users/meunome/projetos/minha-aplicacao`
3. Execute o prompt com uma ferramenta de IA
4. Revise o resultado e salve-o como `.cursor/rules/changeset.mdc`
