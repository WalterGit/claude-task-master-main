#!/bin/bash

# Script para implantar o Task Master MCP Server

# Garantir que as variáveis de ambiente estejam configuradas
if [ ! -f .env.production ]; then
  echo "Arquivo .env.production não encontrado. Por favor, configure-o primeiro."
  exit 1
fi

# Verificar se as chaves API estão configuradas
if grep -q "sua_chave_api_anthropic_aqui" .env.production; then
  echo "AVISO: Você precisa atualizar a chave API Anthropic em .env.production"
  exit 1
fi

# Verificar se a rede wasnet existe
if ! docker network ls | grep -q wasnet; then
  echo "A rede 'wasnet' não foi encontrada. Criando..."
  docker network create wasnet
fi

# Construir e iniciar o contêiner usando docker-compose
echo "Construindo e iniciando o serviço Task Master MCP Server..."
docker-compose build --no-cache
docker-compose up -d

echo "O Task Master MCP Server foi iniciado."
echo "Você poderá acessá-lo em: https://task-master.wastintas.com.br/" 