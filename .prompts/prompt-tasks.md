# Prompt para Gerar Tasks.mdc

## Objetivo

Este prompt é usado para gerar um arquivo `tasks.mdc` que documenta as diretrizes para operações de gerenciamento de tarefas no Task Master. O arquivo gerado segue o padrão das regras Cursor e fornece orientações claras sobre a estrutura de dados das tarefas e como manipulá-las.

## Instruções para Uso

1. Substitua `[CAMINHO_DO_PROJETO]` pelo caminho absoluto da pasta do seu projeto
2. Execute este prompt em uma ferramenta de IA como Claude ou ChatGPT
3. Revise e ajuste o conteúdo gerado antes de salvá-lo como `.cursor/rules/tasks.mdc`

## Prompt

````
Analise o código-fonte localizado em [CAMINHO_DO_PROJETO] para entender como as tarefas são estruturadas e gerenciadas, e crie um documento Markdown que descreva as diretrizes para operações de gerenciamento de tarefas, seguindo o formato de regras Cursor.

O documento deve:

1. Explicar a estrutura de dados das tarefas (formato JSON, campos, tipos)
2. Detalhar o ciclo de vida das tarefas e os possíveis estados
3. Explicar como as tarefas são armazenadas, carregadas e persistidas
4. Fornecer diretrizes para manipulação programática de tarefas
5. Explicar as relações entre tarefas, subtarefas e dependências
6. Descrever as convenções de IDs e referências entre tarefas
7. Incluir exemplos concretos da estrutura de tarefas
8. Seguir o formato de regras Cursor:
   - Usar marcadores para pontos principais
   - Destacar em negrito os conceitos importantes
   - Incluir exemplos de código relevantes em blocos de código
   - Referenciar outros arquivos no formato `[nome_arquivo](mdc:caminho/do/arquivo)`

O documento deve ter um formato semelhante a:

```markdown
---
description: Diretrizes para implementação e operações de gerenciamento de tarefas
---

# Gerenciamento de Tarefas

- **Estrutura de Dados de Tarefas**
  - **Formato JSON**
    - Estrutura padrão de tarefas.json
    - Validação de esquema
  - **Campos e Tipos**
    ```typescript
    interface Task {
      id: string;                // Identificador único da tarefa
      title: string;             // Título breve e descritivo
      description: string;       // Descrição concisa da tarefa
      status: string;            // Estado atual ('pending', 'done', etc.)
      dependencies: string[];    // IDs das tarefas dependentes
      priority: string;          // Nível de importância ('high', 'medium', 'low')
      details: string;           // Instruções detalhadas de implementação
      testStrategy: string;      // Abordagem de verificação
      subtasks?: Task[];         // Lista de subtarefas, se houver
    }
    ```
  - **Exemplo de Estrutura**
    ```json
    {
      "id": "1",
      "title": "Configurar Autenticação",
      "description": "Implementar sistema de login usando OAuth",
      "status": "pending",
      "dependencies": ["2", "3.1"],
      "priority": "high",
      "details": "Usar cliente ID/segredo do GitHub, lidar com callback, configurar token de sessão.",
      "testStrategy": "Testar login, falhas e casos de borda.",
      "subtasks": [
        {
          "id": "1.1",
          "title": "Configurar OAuth",
          ...
        }
      ]
    }
    ```

- **Ciclo de Vida das Tarefas**
  - **Estados Padrão**
    - 'pending': Tarefas prontas para serem trabalhadas
    - 'done': Tarefas concluídas e verificadas
    - 'in-progress': Tarefas em andamento
    - 'review': Tarefas aguardando revisão
    - 'deferred': Tarefas adiadas
    - 'cancelled': Tarefas canceladas
  - **Transições de Estado**
    - Fluxo de transições recomendado
    - Validações de transição
  - **Estados Personalizados**
    - Quando e como definir estados personalizados

- **Armazenamento e Persistência**
  - **Sistema de Arquivos**
    - Armazenamento de tasks.json
    - Criação de arquivos de tarefas markdown
  - **Carregamento e Salvamento**
    - Processo de leitura e gravação
    - Tratamento de erros

- **Manipulação Programática**
  - **Funções Principais**
    - Obter tarefas
    - Modificar tarefas
    - Validar tarefas
  - **Considerações de Desempenho**
    - Estratégias para conjuntos grandes de tarefas

- **Relacionamentos de Tarefas**
  - **Subtarefas**
    - Convenções de ID para subtarefas
    - Organização lógica de decomposição
  - **Dependências**
    - Referências diretas vs. dependências implícitas
    - Validação de dependências circulares

- **Convenções de ID**
  - Formato de IDs de tarefas
  - Formato de IDs de subtarefas
  - Considerações para ordenação
````

Por favor, analise o código-fonte para entender como as tarefas são estruturadas e gerenciadas no projeto atual, e crie diretrizes precisas e úteis que reflitam as práticas e estruturas reais utilizadas.

```

---

## Exemplo de Uso
Para gerar um documento de diretrizes de gerenciamento de tarefas para um projeto localizado em `/Users/meunome/projetos/minha-aplicacao`:

1. Copie o conteúdo do prompt
2. Substitua `[CAMINHO_DO_PROJETO]` por `/Users/meunome/projetos/minha-aplicacao`
3. Execute o prompt com uma ferramenta de IA
4. Revise o resultado e salve-o como `.cursor/rules/tasks.mdc`
```
