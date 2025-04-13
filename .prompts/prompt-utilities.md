# Prompt para Gerar Utilities.mdc

## Objetivo

Este prompt é usado para gerar um arquivo `utilities.mdc` que documenta as diretrizes para implementar funções utilitárias para o Task Master. O arquivo gerado segue o padrão das regras Cursor e fornece orientações claras sobre como criar, organizar e documentar utilitários reutilizáveis.

## Instruções para Uso

1. Substitua `[CAMINHO_DO_PROJETO]` pelo caminho absoluto da pasta do seu projeto
2. Execute este prompt em uma ferramenta de IA como Claude ou ChatGPT
3. Revise e ajuste o conteúdo gerado antes de salvá-lo como `.cursor/rules/utilities.mdc`

## Prompt

````
Analise o código-fonte localizado em [CAMINHO_DO_PROJETO], com foco particular nas funções utilitárias, e crie um documento Markdown que descreva as diretrizes para implementar funções utilitárias, seguindo o formato de regras Cursor.

O documento deve:

1. Explicar a estrutura e organização dos utilitários no projeto
2. Detalhar os tipos de utilitários disponíveis e seu propósito
3. Fornecer padrões para implementação de novos utilitários
4. Explicar as convenções de nomeação, documentação e testes para utilitários
5. Descrever padrões para tratamento de erros, logging e performance
6. Fornecer diretrizes para decidir quando criar uma função utilitária vs. código inline
7. Incluir exemplos concretos de bons utilitários do código atual
8. Seguir o formato de regras Cursor:
   - Usar marcadores para pontos principais
   - Destacar em negrito os conceitos importantes
   - Incluir exemplos de código relevantes em blocos de código
   - Referenciar outros arquivos no formato `[nome_arquivo](mdc:caminho/do/arquivo)`

O documento deve ter um formato semelhante a:

```markdown
---
description: Diretrizes para implementar funções utilitárias para o Task Master
---

# Funções Utilitárias

- **Estrutura e Organização**
  - **Localização**
    - Diretórios para utilitários específicos
    - Quando colocar utilitários inline vs. arquivos separados
  - **Categorização**
    - Utilitários de manipulação de string
    - Utilitários de sistema de arquivos
    - Utilitários de validação
    - Utilitários de formatação
    - Outros tipos específicos do domínio

- **Padrões de Implementação**
  - **Assinaturas de Função**
    - Parâmetros claros e tipados
    - Valores de retorno consistentes
    - Uso apropriado de parâmetros opcionais
  - **Pureza e Efeitos Colaterais**
    - Preferência por funções puras quando possível
    - Documentação clara de efeitos colaterais
  ```typescript
  // ✅ Função utilitária pura
  export function formatTaskId(id: string, includePrefix = false): string {
    return includePrefix ? `Task-${id}` : id;
  }

  // ❌ Evitar efeitos colaterais não documentados
  export function validateTaskId(id: string): boolean {
    // Não fazer isso - efeito colateral não documentado!
    if (!id.match(/^\d+(\.\d+)?$/)) {
      console.error(`ID de tarefa inválido: ${id}`);
      return false;
    }
    return true;
  }
````

- **Convenções de Nomeação**

  - **Verbos e Clareza**
    - Começar com verbos para funções de ação
    - Nomes descritivos e inequívocos
  - **Consistência**
    - Padrões para prefixos/sufixos
    - Convenções para casos específicos

- **Documentação**

  - **JSDoc**
    - Formato padrão
    - Descrição, parâmetros, retorno
    - Exemplos quando útil

  ```typescript
  /**
   * Valida um ID de tarefa.
   *
   * @param id - O ID da tarefa para validar (ex: '1' ou '1.2')
   * @returns true se o ID for válido, false caso contrário
   * @example
   * validateTaskId('1')      // true
   * validateTaskId('1.2')    // true
   * validateTaskId('1.2.3')  // false
   */
  export function validateTaskId(id: string): boolean {
  	return /^\d+(\.\d+)?$/.test(id);
  }
  ```

- **Tratamento de Erros**

  - **Padrões de Erro**
    - Quando lançar exceções vs. retornar valores de erro
    - Tipos de erro padrão
  - **Robustez**
    - Validação de entrada
    - Casos de borda a considerar

- **Performance e Otimização**

  - **Considerações de Performance**
    - Complexidade de tempo/espaço
    - Lazy evaluation quando apropriado
  - **Memoização**
    - Quando e como aplicar

- **Testes**

  - **Cobertura**
    - Expectativas de cobertura para utilitários
    - Casos de teste essenciais
  - **Organização**
    - Estrutura de arquivos de teste
    - Agrupamento de casos de teste

- **Exemplos do Projeto**
  - **Utilitário X**
    - Propósito e uso
    - Pontos importantes da implementação
  - **Utilitário Y**
    - Propósito e uso
    - Pontos importantes da implementação

```

Por favor, analise o código-fonte com foco nas funções utilitárias para criar diretrizes precisas e úteis que reflitam as práticas e padrões reais utilizados no projeto.
```

---

## Exemplo de Uso

Para gerar um documento de diretrizes para funções utilitárias para um projeto localizado em `/Users/meunome/projetos/minha-aplicacao`:

1. Copie o conteúdo do prompt
2. Substitua `[CAMINHO_DO_PROJETO]` por `/Users/meunome/projetos/minha-aplicacao`
3. Execute o prompt com uma ferramenta de IA
4. Revise o resultado e salve-o como `.cursor/rules/utilities.mdc`
