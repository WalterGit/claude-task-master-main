# Prompt para Gerar Architecture.mdc

## Objetivo

Este prompt é usado para gerar um arquivo `architecture.mdc` que documenta a arquitetura de alto nível de uma aplicação. O arquivo gerado segue o padrão das regras Cursor e fornece orientações claras sobre a estrutura do projeto.

## Instruções para Uso

1. Substitua `[CAMINHO_DO_PROJETO]` pelo caminho absoluto da pasta do seu projeto
2. Execute este prompt em uma ferramenta de IA como Claude ou ChatGPT
3. Revise e ajuste o conteúdo gerado antes de salvá-lo como `.cursor/rules/architecture.mdc`

## Prompt

````
Analise o código-fonte localizado em [CAMINHO_DO_PROJETO] e crie um documento Markdown que descreva a arquitetura de alto nível da aplicação seguindo o formato de regras Cursor.

O documento deve:

1. Começar com uma descrição clara e concisa em uma linha sobre o propósito do sistema
2. Incluir uma seção sobre a estrutura de diretórios e sua organização lógica
3. Descrever os principais componentes do sistema e suas responsabilidades
4. Explicar os fluxos de dados e de controle entre os componentes
5. Documentar os padrões de design utilizados e suas aplicações
6. Incluir um diagrama textual ou ASCII da arquitetura, se relevante
7. Listar as dependências externas principais e seu propósito
8. Seguir o formato de regras Cursor:
   - Usar marcadores para pontos principais
   - Destacar em negrito os conceitos importantes
   - Incluir exemplos de código relevantes em blocos de código
   - Referenciar outros arquivos no formato `[nome_arquivo](mdc:caminho/do/arquivo)`

O documento deve ter um formato semelhante a:

```markdown
---
description: Descrição de alto nível da arquitetura da aplicação
---

- **Visão Geral do Sistema**
  - Propósito e escopo da aplicação
  - Princípios de design principais

- **Estrutura de Diretórios**
  - Organização dos arquivos e pastas
  - Convenções de nomenclatura

- **Componentes Principais**
  - **Componente A**
    - Responsabilidade
    - Interações
  - **Componente B**
    - Responsabilidade
    - Interações

- **Fluxos de Dados**
  - Diagrama de fluxo de dados
  - Principais processos

- **Padrões de Design**
  - Padrões utilizados e justificativa
  - Exemplos de implementação

- **Dependências Externas**
  - Bibliotecas principais
  - Serviços externos

- **Considerações de Performance**
  - Estratégias de otimização
  - Potenciais gargalos
````

Por favor, analise o código-fonte para criar uma documentação precisa e útil, destacando os aspectos arquiteturais mais importantes para desenvolvedores que precisam entender o sistema.

```

---

## Exemplo de Uso
Para gerar um documento de arquitetura para um projeto localizado em `/Users/meunome/projetos/minha-aplicacao`:

1. Copie o conteúdo do prompt
2. Substitua `[CAMINHO_DO_PROJETO]` por `/Users/meunome/projetos/minha-aplicacao`
3. Execute o prompt com uma ferramenta de IA
4. Revise o resultado e salve-o como `.cursor/rules/architecture.mdc`
```
