# Prompt para Gerar Tests.mdc

## Objetivo

Este prompt é usado para gerar um arquivo `tests.mdc` que documenta as diretrizes para implementar e manter testes para o Task Master CLI. O arquivo gerado segue o padrão das regras Cursor e fornece orientações claras sobre estratégias de teste, ferramentas e boas práticas.

## Instruções para Uso

1. Substitua `[CAMINHO_DO_PROJETO]` pelo caminho absoluto da pasta do seu projeto
2. Execute este prompt em uma ferramenta de IA como Claude ou ChatGPT
3. Revise e ajuste o conteúdo gerado antes de salvá-lo como `.cursor/rules/tests.mdc`

## Prompt

````
Analise o código-fonte localizado em [CAMINHO_DO_PROJETO], com foco particular nos testes existentes, e crie um documento Markdown que descreva as diretrizes para implementar e manter testes para o Task Master, seguindo o formato de regras Cursor.

O documento deve:

1. Explicar a estrutura e organização dos testes no projeto
2. Detalhar os tipos de testes (unitários, integração, e2e) utilizados e quando usar cada um
3. Explicar as ferramentas e frameworks de teste utilizados
4. Fornecer diretrizes para escrever testes eficazes
5. Explicar técnicas de mock, stub e spy usadas nos testes
6. Descrever as convenções de nomenclatura e estrutura de arquivos para testes
7. Incluir exemplos concretos de bons testes do código atual
8. Seguir o formato de regras Cursor:
   - Usar marcadores para pontos principais
   - Destacar em negrito os conceitos importantes
   - Incluir exemplos de código relevantes em blocos de código
   - Referenciar outros arquivos no formato `[nome_arquivo](mdc:caminho/do/arquivo)`

O documento deve ter um formato semelhante a:

```markdown
---
description: Diretrizes para implementar e manter testes para o Task Master CLI
---

# Testes

- **Estrutura de Testes**
  - **Organização de Diretórios**
    - Localização dos arquivos de teste
    - Convenções de pareamento com código-fonte
  - **Tipos de Teste**
    - Testes unitários para lógica isolada
    - Testes de integração para interações entre componentes
    - Testes end-to-end para fluxos completos

- **Ferramentas de Teste**
  - **Framework Principal**
    - Jest, Mocha, ou outro framework utilizado
    - Configuração e extensões
  - **Utilitários de Teste**
    - Bibliotecas de asserção
    - Ferramentas de mock e spies
    - Helpers personalizados

- **Escrevendo Testes Eficazes**
  - **Estrutura de Teste**
    ```typescript
    // Exemplo de estrutura de teste
    describe('Módulo X', () => {
      beforeEach(() => {
        // Configuração comum
      });

      test('deve fazer Y quando Z', () => {
        // Arrange - Configurar dados de teste
        // Act - Executar a função/método sob teste
        // Assert - Verificar os resultados
      });
    });
    ```
  - **Melhores Práticas**
    - Testes isolados e independentes
    - Nomes descritivos e claros
    - Cobertura adequada de casos de borda
    - ✅ Exemplos de bons testes
    - ❌ Antipadrões a evitar

- **Técnicas de Mock**
  - **Mocking de Dependências**
    - Como e quando mockar módulos externos
    - Mocking de sistema de arquivos
    - Mocking de respostas de API
  - **Spies e Stubs**
    - Monitorando chamadas de função
    - Substituindo implementações temporariamente

- **Testes de CLI**
  - **Simulação de Interface de Linha de Comando**
    - Captura de stdout/stderr
    - Injeção de entrada de usuário
  - **Testes de Integração de Comandos**
    - Estratégias para testar comandos completos

- **Exemplos do Projeto**
  - **Teste de Comando X**
    - Abordagem e técnicas utilizadas
    - Pontos importantes da implementação
  - **Teste de Módulo Y**
    - Abordagem e técnicas utilizadas
    - Pontos importantes da implementação
````

Por favor, analise o código-fonte com foco nos testes existentes para criar diretrizes precisas e úteis que reflitam as práticas e estruturas de teste reais utilizadas no projeto.

```

---

## Exemplo de Uso
Para gerar um documento de diretrizes de testes para um projeto localizado em `/Users/meunome/projetos/minha-aplicacao`:

1. Copie o conteúdo do prompt
2. Substitua `[CAMINHO_DO_PROJETO]` por `/Users/meunome/projetos/minha-aplicacao`
3. Execute o prompt com uma ferramenta de IA
4. Revise o resultado e salve-o como `.cursor/rules/tests.mdc`
```
