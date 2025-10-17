# 📦 Guia de Instalação de Pacotes

Este projeto usa **Deno** como runtime, que tem seu próprio sistema de
gerenciamento de dependências integrado.

## 🚀 Comando Principal

```bash
deno add <package-name>
```

## 📋 Exemplos Práticos

### Pacote do JSR (JavaScript Registry)

```bash
# Exemplo: coleção utilitária padrão do Deno
deno add jsr:@std/collections
```

### Pacote do NPM

```bash
# Exemplo: framework popular do Node.js
deno add npm:express
```

## ⚙️ Opções Avançadas

### Dependências de Desenvolvimento

```bash
deno add --dev jsr:@std/testing
```

### Especificar Versão

```bash
deno add jsr:@std/collections@1.0.0
deno add npm:express@4.19.2
```

## 📁 Como Funciona

1. **Adiciona ao `deno.json`**: O pacote é automaticamente adicionado na seção
   `imports`
2. **Download automático**: Dependências são baixadas e armazenadas em cache
3. **Lock file**: Cria/atualiza `deno.lock` para versões determinísticas

## ✅ Use Apenas

- ✅ `deno add` - Comando oficial do Deno
- ❌ `npm install` - Não funciona com Deno
- ❌ `yarn add` - Não funciona com Deno
- ❌ `pnpm add` - Não funciona com Deno

## 🔍 Verificar Dependências

```bash
# Ver todas as dependências instaladas
cat deno.json

# Verificar cache de dependências
deno info

# Limpar cache (se necessário)
deno cache --reload
```

## 🎯 Importar em Código

Após instalar, importe usando o nome do mapping:

```typescript
// Se instalou: deno add jsr:@std/collections
import { distinct, maxBy, sumOf, partition } from "@std/collections";

// Se instalou: deno add npm:express
import express from "express";
```

## 🔧 Troubleshooting

**Erro de permissão?**

```bash
deno add --allow-read --allow-net jsr:@std/package
```

**Cache corrompido?**

```bash
deno cache --reload src/main.ts
```

**Dependência não encontrada?**

- Verifique se o nome está correto
- Tente usar a URL completa
- Consulte [jsr.io](https://jsr.io) ou [deno.land/x](https://deno.land/x)
