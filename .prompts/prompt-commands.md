# Prompt para Gerar Commands.mdc

## Objetivo

Este prompt é usado para gerar um arquivo `commands.mdc` que documenta as diretrizes para implementação de comandos CLI usando Commander.js. O arquivo gerado segue o padrão das regras Cursor e fornece orientações claras sobre como implementar e organizar comandos na aplicação.

## Instruções para Uso

1. Substitua `[CAMINHO_DO_PROJETO]` pelo caminho absoluto da pasta do seu projeto
2. Execute este prompt em uma ferramenta de IA como Claude ou ChatGPT
3. Revise e ajuste o conteúdo gerado antes de salvá-lo como `.cursor/rules/commands.mdc`

## Prompt

````
Analise o código-fonte localizado em [CAMINHO_DO_PROJETO] para entender como os comandos CLI são implementados e crie um documento Markdown que descreva as diretrizes para implementar comandos (provavelmente usando Commander.js ou similares), seguindo o formato de regras Cursor.

O documento deve:

1. Explicar a estrutura geral de comandos CLI na aplicação
2. Descrever os padrões de arquitetura utilizados para organizar comandos
3. Explicar como criar um novo comando (passo a passo)
4. Detalhar as convenções de nomes, estrutura de arquivos e padrões de código
5. Fornecer orientações sobre processamento de argumentos, opções e flags
6. Explicar o tratamento de erros e saída para o usuário
7. Incluir exemplos concretos de comandos bem implementados do código atual
8. Seguir o formato de regras Cursor:
   - Usar marcadores para pontos principais
   - Destacar em negrito os conceitos importantes
   - Incluir exemplos de código relevantes em blocos de código
   - Referenciar outros arquivos no formato `[nome_arquivo](mdc:caminho/do/arquivo)`

O documento deve ter um formato semelhante a:

```markdown
---
description: Diretrizes para implementação de comandos CLI usando Commander.js
---

# Implementação de Comandos CLI

- **Estrutura de Comandos**
  - Organização hierárquica de comandos e subcomandos
  - Localização dos arquivos de comandos no projeto

- **Criando um Novo Comando**
  - Passo 1: Definir a estrutura do comando
  - Passo 2: Implementar a lógica principal
  - Passo 3: Integrar com o sistema de comandos existente
  - Passo 4: Adicionar testes

- **Convenções de Código**
  - **Nomenclatura**
    - Padrões de nomes para arquivos e funções
    - Exemplos de nomes adequados
  - **Estrutura de Arquivos**
    - Organização dos componentes do comando
    - Separação de responsabilidades

- **Processamento de Entrada**
  - Definindo argumentos obrigatórios
  - Configurando opções e flags opcionais
  - Validando entrada do usuário
  ```typescript
  // Exemplo de definição de comando com argumentos e opções
  program
    .command('exemplo <argObrigatorio>')
    .option('-o, --opcao <valor>', 'Descrição da opção')
    .action((argObrigatorio, options) => {
      // Implementação
    });
````

- **Tratamento de Erros**

  - Padrões de captura e reporte de erros
  - Formato consistente de mensagens de erro
  - Códigos de saída apropriados

- **Exemplos do Projeto**

  - **Comando A**
    - Propósito e uso
    - Pontos importantes da implementação
  - **Comando B**
    - Propósito e uso
    - Pontos importantes da implementação

- **Integração com Módulos Principais**
  - Como comandos interagem com o núcleo da aplicação
  - Padrões de dependência e inversão de controle

```

Por favor, analise o código-fonte para identificar os padrões reais usados nos comandos existentes, garantindo que suas diretrizes reflitam fielmente as práticas do projeto.
```

---

## Exemplo de Uso

Para gerar um documento de diretrizes de implementação de comandos CLI para um projeto localizado em `/Users/meunome/projetos/minha-aplicacao`:

1. Copie o conteúdo do prompt
2. Substitua `[CAMINHO_DO_PROJETO]` por `/Users/meunome/projetos/minha-aplicacao`
3. Execute o prompt com uma ferramenta de IA
4. Revise o resultado e salve-o como `.cursor/rules/commands.mdc`
