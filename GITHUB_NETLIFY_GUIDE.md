# 🚀 Deploy no GitHub + Netlify - Guia Completo

Neste guia você aprenderá a:
1. ✅ Fazer upload do projeto para o GitHub
2. ✅ Deploy automático no Netlify
3. ✅ Configurar domínio (opcional)

---

## 📋 Pré-requisitos

- ✅ Conta no GitHub (gratuita em https://github.com)
- ✅ Conta no Netlify (gratuita em https://www.netlify.com)
- ✅ Git instalado no seu computador (https://git-scm.com)
- ✅ Seus arquivos do projeto

---

## 🎯 PASSO 1: Preparar os Arquivos Localmente

### 1.1 Criar pasta do projeto

```bash
# Windows / Mac / Linux
mkdir meu-ebook-store
cd meu-ebook-store
```

### 1.2 Copiar todos os arquivos

Copie estes arquivos para a pasta:

```
meu-ebook-store/
├── index.html
├── style.css
├── script.js
├── dashboard.html
├── dashboard.css
├── dashboard.js
├── agente-vendas.html
├── agente-vendas.css
├── agente-vendas.js
└── README.md (veremos abaixo)
```

### 1.3 Criar arquivo .gitignore

Crie um arquivo chamado `.gitignore` (comece com ponto):

```
# Dependências
node_modules/
*.log

# Sistema operacional
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/

# Variáveis de ambiente
.env
.env.local

# Builds
/dist
/build
```

### 1.4 Criar arquivo README.md para GitHub

```markdown
# 📚 Biblioteca Digital - Sistema de Vendas de E-books

Um sistema completo para vender e-books com catálogo visual, dashboard administrativo e agente de vendas interativo.

## 🎯 Funcionalidades

✅ **Catálogo de E-books**
- Interface moderna e responsiva
- Integração com WhatsApp
- Botão flutuante para contato

✅ **Dashboard Administrativo**
- 6 seções diferentes
- Gráficos interativos
- KPIs em tempo real
- Dark mode

✅ **Agente de Vendas (Chatbot)**
- Chat interativo
- IA simulada
- Histórico de conversas
- Integração com WhatsApp

## 🚀 Deploy Rápido

### Netlify (Recomendado)

1. Clique em: https://app.netlify.com/start
2. Escolha "GitHub"
3. Selecione seu repositório
4. Clique em "Deploy"

Pronto! Seu site estará online em minutos!

### Alternativas

- GitHub Pages
- Vercel
- Firebase Hosting

## 📱 Acessar

Após o deploy, você receberá uma URL:
```
https://seu-nome-aleatorio.netlify.app
```

Compartilhe com seus clientes!

## 📋 Estrutura

- `index.html` - Catálogo de e-books
- `dashboard.html` - Painel administrativo
- `agente-vendas.html` - Chat de vendas
- Arquivos CSS e JS correspondentes

## 🔧 Customização

1. Abra `index.html` em um editor
2. Altere títulos, descrições, preços
3. Configure seu número WhatsApp
4. Personalize cores

## 💡 Dicas

- Teste localmente primeiro
- Use imagens de qualidade
- Mantenha descrições curtas
- Customize conforme sua marca

## 📊 Seu Número WhatsApp

```
+5524998321054
```

Altere este número em todos os arquivos para o seu!

## 🆘 Suporte

Consulte a documentação inclusa:
- README.md - Guia completo
- CHECKLIST.md - Configuração rápida
- DASHBOARD_GUIA.md - Painel admin

## 📄 Licença

Livre para uso pessoal e comercial.

## 🎉 Pronto!

Comece a vender seus e-books agora! 🚀

---

Desenvolvido com ❤️ para criadores de conteúdo
```

### 1.5 Criar arquivo netlify.toml (Opcional mas recomendado)

Crie um arquivo chamado `netlify.toml`:

```toml
# Configuração do Netlify

[build]
  command = "# Nenhum build necessário (site estático)"
  publish = "."

[context.production]
  environment = { NODE_ENV = "production" }

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
```

---

## 🔐 PASSO 2: Criar Repositório no GitHub

### 2.1 Acessar GitHub

1. Vá para: https://github.com
2. Faça login (ou crie conta)
3. Clique no `+` (canto superior direito)
4. Escolha "New repository"

### 2.2 Criar o repositório

```
Repository name: meu-ebook-store
Description: Sistema de vendas de e-books
Visibility: Public
```

**Não** marque "Initialize with README" (usaremos o nosso)

Clique em "Create repository"

### 2.3 Copiar comando Git

Você verá comandos como:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/meu-ebook-store.git
git push -u origin main
```

---

## 💻 PASSO 3: Git Básico

### 3.1 Instalar Git

**Windows:**
- Baixe em: https://git-scm.com/download/win
- Execute o instalador
- Use configurações padrão

**Mac:**
```bash
brew install git
```

**Linux:**
```bash
sudo apt-get install git
```

### 3.2 Configurar Git (primeira vez)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### 3.3 Upload do seu projeto

Abra o Terminal/CMD na pasta do projeto:

```bash
# Entrar na pasta
cd meu-ebook-store

# Inicializar git
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "🚀 Deploy inicial - Catálogo de E-books"

# Adicionar remote
git remote add origin https://github.com/SEU_USUARIO/meu-ebook-store.git

# Fazer push para main
git branch -M main
git push -u origin main
```

**Será pedido seu login GitHub:**
- Username: seu nome de usuário
- Password: seu token pessoal (criar em Settings > Developer settings > Personal access tokens)

✅ Pronto! Seu código está no GitHub!

---

## 🌐 PASSO 4: Deploy no Netlify

### 4.1 Acessar Netlify

1. Vá para: https://app.netlify.com
2. Faça login com GitHub
3. Clique em "New site from Git"

### 4.2 Conectar ao GitHub

1. Escolha "GitHub" como provedor
2. Autorize o Netlify acessar GitHub
3. Selecione seu repositório `meu-ebook-store`

### 4.3 Configurar Deploy

**Configurações básicas:**

```
Branch to deploy: main
Build command: (deixe em branco)
Publish directory: . (ponto, raiz do projeto)
```

Clique em "Deploy site"

### 4.4 Aguarde

Netlify começará a fazer deploy automaticamente!

**Você verá:**
1. Processando...
2. Building...
3. Published! ✅

---

## 🎉 PASSO 5: Seu Site Está Online!

Após o deploy, você receberá uma URL:

```
https://seu-nome-aleatorio.netlify.app
```

### Próximos passos:

✅ Teste todas as funcionalidades  
✅ Compartilhe com amigos/clientes  
✅ Configure um domínio próprio (opcional)  
✅ Customize as cores e textos  

---

## 🌍 PASSO 6: Usar Domínio Próprio (Opcional)

### 6.1 Comprar domínio

Use: Registro.br, GoDaddy, NameCheap, etc.

Exemplo: `meu-ebook-store.com.br`

### 6.2 Configurar no Netlify

1. Vá para seu site no Netlify
2. Clique em "Domain settings"
3. "Add custom domain"
4. Digite: `meu-ebook-store.com.br`
5. Siga as instruções para configurar DNS

---

## 🔄 Atualizações Futuras

Depois que tudo estiver pronto, para fazer alterações:

```bash
# Editar arquivos localmente
# Depois:

git add .
git commit -m "Descrição da mudança"
git push

# Netlify fará deploy automaticamente! 🚀
```

---

## 🆘 Troubleshooting

### ❌ Deploy falhou
- Verifique se todos os arquivos estão na pasta
- Confira se .gitignore está correto
- Tente fazer push novamente

### ❌ Site mostra 404
- Verifique se index.html está na raiz
- Confirme que netlify.toml está correto

### ❌ Não consigo conectar ao GitHub
- Crie um token pessoal em GitHub > Settings
- Use o token como senha no Git

### ❌ Alterações não aparecem
- Aguarde 1-2 minutos
- Limpe o cache (Ctrl+Shift+Del)
- Faça hard refresh (Ctrl+Shift+R)

---

## 📊 Resumo Rápido

```
1. ✅ Preparar arquivos localmente
2. ✅ Criar repositório no GitHub
3. ✅ Fazer upload via Git
4. ✅ Conectar ao Netlify
5. ✅ Deploy automático
6. ✅ Seu site está online!
```

---

## 🎯 Resultado Final

✨ Um site profissional online em menos de 30 minutos!

- URL: https://seu-nome-aleatorio.netlify.app
- Grátis para hospedar
- Deploy automático a cada atualização
- SSL certificado (HTTPS)
- CDN global

---

## 💡 Dicas Extras

✅ **Para melhor SEO:**
- Customize meta tags
- Adicione analytics
- Otimize imagens

✅ **Para mais vendas:**
- Customize agente de vendas
- Integre pagamento (Kiwify)
- Automação de email

✅ **Segurança:**
- Ative 2FA no GitHub
- Proteja dados sensíveis
- Use variáveis de ambiente

---

**Pronto para começar? Boa sorte! 🚀**

Para dúvidas, consulte a documentação completa do projeto.

Desenvolvido com ❤️ para criadores de conteúdo
