# Prompt para Gerar Self_Improve.mdc

## Objetivo

Este prompt é usado para gerar um arquivo `self_improve.mdc` que documenta as diretrizes para melhorar continuamente as regras Cursor com base em padrões de código emergentes e melhores práticas. O arquivo gerado segue o padrão das regras Cursor e fornece uma estrutura para evolução contínua da documentação.

## Instruções para Uso

1. Substitua `[CAMINHO_DO_PROJETO]` pelo caminho absoluto da pasta do seu projeto
2. Execute este prompt em uma ferramenta de IA como Claude ou ChatGPT
3. Revise e ajuste o conteúdo gerado antes de salvá-lo como `.cursor/rules/self_improve.mdc`

## Prompt

````
Analise o código-fonte localizado em [CAMINHO_DO_PROJETO] e as regras Cursor existentes (se houver) para entender os padrões de código e as práticas de documentação, e crie um documento Markdown que descreva as diretrizes para melhorar continuamente as regras Cursor, seguindo o próprio formato de regras Cursor.

O documento deve:

1. Identificar os gatilhos que indicam quando as regras Cursor devem ser atualizadas
2. Explicar o processo de análise para identificar novos padrões ou práticas
3. Detalhar quando e como adicionar novas regras vs. modificar regras existentes
4. Fornecer diretrizes para verificação de qualidade das regras
5. Explicar como manter a documentação sincronizada com o código real
6. Incluir processos para depreciação e remoção de regras obsoletas
7. Fornecer exemplos concretos de reconhecimento de padrões e atualização de regras
8. Seguir o formato de regras Cursor:
   - Usar marcadores para pontos principais
   - Destacar em negrito os conceitos importantes
   - Incluir exemplos de código relevantes em blocos de código
   - Referenciar outros arquivos no formato `[nome_arquivo](mdc:caminho/do/arquivo)`

O documento deve ter um formato semelhante a:

```markdown
---
description: Diretrizes para melhorar continuamente as regras Cursor com base em padrões de código emergentes
---

# Melhoria Contínua de Regras

- **Gatilhos para Melhoria de Regras:**
  - Novos padrões de código não cobertos pelas regras existentes
  - Implementações semelhantes repetidas em vários arquivos
  - Padrões comuns de erro que poderiam ser prevenidos
  - Novas bibliotecas ou ferramentas sendo usadas consistentemente
  - Práticas emergentes no código-base

- **Processo de Análise:**
  - Comparar código novo com regras existentes
  - Identificar padrões que deveriam ser padronizados
  - Procurar referências a documentação externa
  - Verificar padrões consistentes de tratamento de erros
  - Monitorar padrões de teste e cobertura

- **Atualizações de Regras:**
  - **Adicionar Novas Regras Quando:**
    - Uma nova tecnologia/padrão é usada em 3+ arquivos
    - Bugs comuns poderiam ser prevenidos por uma regra
    - Revisões de código mencionam repetidamente o mesmo feedback
    - Novos padrões de segurança ou desempenho emergem

  - **Modificar Regras Existentes Quando:**
    - Melhores exemplos existem no código-base
    - Casos de borda adicionais são descobertos
    - Regras relacionadas foram atualizadas
    - Detalhes de implementação mudaram

- **Exemplo de Reconhecimento de Padrão:**
  ```typescript
  // Se você vir padrões repetidos como:
  const data = await prisma.user.findMany({
    select: { id: true, email: true },
    where: { status: 'ACTIVE' }
  });

  // Considere adicionar à regra prisma.mdc:
  // - Campos de seleção padrão
  // - Condições where comuns
  // - Padrões de otimização de desempenho
````

- **Verificações de Qualidade de Regras:**

  - Regras devem ser acionáveis e específicas
  - Exemplos devem vir do código real
  - Referências devem estar atualizadas
  - Padrões devem ser aplicados consistentemente

- **Melhoria Contínua:**

  - Monitorar comentários de revisão de código
  - Acompanhar perguntas comuns de desenvolvimento
  - Atualizar regras após refatorações importantes
  - Adicionar links para documentação relevante
  - Fazer referência cruzada a regras relacionadas

- **Depreciação de Regras:**

  - Marcar padrões obsoletos como depreciados
  - Remover regras que não se aplicam mais
  - Atualizar referências a regras depreciadas
  - Documentar caminhos de migração para padrões antigos

- **Atualizações de Documentação:**
  - Manter exemplos sincronizados com o código
  - Atualizar referências a documentos externos
  - Manter links entre regras relacionadas
  - Documentar mudanças significativas

```

Por favor, analise o código-fonte e as regras Cursor existentes para criar diretrizes precisas e úteis sobre como melhorar continuamente o conjunto de regras, refletindo as práticas atuais e promovendo alta qualidade de código e documentação.
```

---

## Exemplo de Uso

Para gerar um documento de diretrizes para melhoria contínua de regras Cursor para um projeto localizado em `/Users/meunome/projetos/minha-aplicacao`:

1. Copie o conteúdo do prompt
2. Substitua `[CAMINHO_DO_PROJETO]` por `/Users/meunome/projetos/minha-aplicacao`
3. Execute o prompt com uma ferramenta de IA
4. Revise o resultado e salve-o como `.cursor/rules/self_improve.mdc`
