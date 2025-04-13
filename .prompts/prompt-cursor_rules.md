# Prompt para Gerar Cursor_Rules.mdc

## Objetivo

Este prompt é usado para gerar um arquivo `cursor_rules.mdc` que documenta as diretrizes para criar e manter regras Cursor eficazes. O arquivo gerado fornece orientações claras sobre o formato, estrutura e boas práticas para documentação interna do projeto.

## Instruções para Uso

1. Substitua `[CAMINHO_DO_PROJETO]` pelo caminho absoluto da pasta do seu projeto
2. Execute este prompt em uma ferramenta de IA como Claude ou ChatGPT
3. Revise e ajuste o conteúdo gerado antes de salvá-lo como `.cursor/rules/cursor_rules.mdc`

## Prompt

````
Analise o código-fonte e as regras Cursor existentes em [CAMINHO_DO_PROJETO] (especialmente no diretório .cursor/rules, se existir) e crie um documento Markdown que descreva as diretrizes para criar e manter regras Cursor eficazes.

O documento deve:

1. Explicar o propósito das regras Cursor e como elas auxiliam no desenvolvimento
2. Detalhar a estrutura correta de um arquivo de regra (metadados, formato, organização)
3. Descrever convenções de nomenclatura para arquivos de regras
4. Explicar como referenciar outros arquivos, regras e código-fonte
5. Fornecer orientações sobre como manter as regras atualizadas
6. Incluir exemplos de boas e más práticas na criação de regras
7. Explicar quando criar novas regras vs. atualizar regras existentes
8. Seguir o próprio formato recomendado para regras Cursor:
   - Usar marcadores para pontos principais
   - Destacar em negrito os conceitos importantes
   - Incluir exemplos de código relevantes em blocos de código
   - Referenciar outros arquivos no formato `[nome_arquivo](mdc:caminho/do/arquivo)`

O documento deve ter um formato semelhante a:

```markdown
---
description: Diretrizes para criar e manter regras Cursor eficazes
---

# Regras Cursor

- **Estrutura Obrigatória**
  ```markdown
  ---
  description: Descrição clara e concisa em uma linha
  globs: padrões/de/arquivos/*.ext, outros/padrões/**/*
  alwaysApply: boolean
  ---

  - **Pontos Principais em Negrito**
    - Subpontos com detalhes
    - Exemplos e explicações
````

- **Referências a Arquivos**

  - Usar `[nome_arquivo](mdc:caminho/do/arquivo)` para referenciar arquivos
  - Exemplo: [arquivo.mdc](mdc:caminho/do/arquivo) para referências a regras
  - Exemplo: [código.ts](mdc:caminho/do/código.ts) para referências a código

- **Exemplos de Código**

  - Usar blocos de código com a linguagem específica

  ```typescript
  // ✅ FAÇA: Mostrar bons exemplos
  const bomExemplo = true;

  // ❌ NÃO FAÇA: Mostrar anti-padrões
  const mauExemplo = false;
  ```

- **Diretrizes de Conteúdo**

  - Começar com visão geral de alto nível
  - Incluir requisitos específicos e acionáveis
  - Mostrar exemplos de implementação correta
  - Referenciar código existente quando possível
  - Manter regras DRY referenciando outras regras

- **Manutenção de Regras**
  - Atualizar regras quando novos padrões emergirem
  - Adicionar exemplos do código real
  - Remover padrões obsoletos
  - Referenciar regras relacionadas

```

Por favor, analise todas as regras Cursor existentes para identificar padrões e práticas atuais, e use essas observações para criar diretrizes precisas e úteis sobre como criar e manter regras Cursor eficazes para este projeto específico.
```

---

## Exemplo de Uso

Para gerar um documento de diretrizes para regras Cursor para um projeto localizado em `/Users/meunome/projetos/minha-aplicacao`:

1. Copie o conteúdo do prompt
2. Substitua `[CAMINHO_DO_PROJETO]` por `/Users/meunome/projetos/minha-aplicacao`
3. Execute o prompt com uma ferramenta de IA
4. Revise o resultado e salve-o como `.cursor/rules/cursor_rules.mdc`
