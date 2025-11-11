# 📚 Catálogo Digital de E-books com Agente WhatsApp

Bem-vindo! Este é um **catálogo profissional e responsivo** para vender e-books com um agente de vendas via WhatsApp integrado.

---

## 🎯 Características

✅ **Responsivo** - Funciona perfeitamente em desktop, tablet e mobile  
✅ **Animações Suaves** - Transições elegantes e profissionais  
✅ **Agente WhatsApp** - Botão flutuante que aparece automaticamente  
✅ **Fácil de Customizar** - Adicione/remova e-books em minutos  
✅ **Performance** - Carregamento rápido e otimizado  
✅ **SEO Friendly** - Pronto para buscadores  

---

## 📁 Estrutura de Arquivos

```
projeto/
│
├── index.html          # Página principal
├── style.css           # Estilos (design)
├── script.js           # JavaScript (animações e lógica)
└── README.md           # Este arquivo
```

---

## 🚀 Como Usar

### 1️⃣ **Download e Instalação**

- Copie os 3 arquivos (`index.html`, `style.css`, `script.js`) para uma pasta
- Abra o `index.html` no navegador

### 2️⃣ **Configurar seu Número WhatsApp**

**Locais para alterar:**

**A) No HTML (índex.html)** - Encontre e substitua em **3 lugares**:

```html
<!-- 1. Botão flutuante no final da página -->
<a id="whatsapp-agent" href="https://api.whatsapp.com/send?phone=5511999998888&text=...">

<!-- 2. Botão "Aceder/Comprar" do E-book 1 -->
<a href="https://api.whatsapp.com/send?phone=5511999998888&text=...">

<!-- 3. Botão "Aceder/Comprar" do E-book 2 -->
<a href="https://api.whatsapp.com/send?phone=5511999998888&text=...">
```

**Formato Correto:**
```
https://api.whatsapp.com/send?phone=SEU_NÚMERO&text=SUA_MENSAGEM
```

**Exemplo:**
```
https://api.whatsapp.com/send?phone=5511987654321&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es
```

**⚠️ Formato do Número:**
- `55` = Código do Brasil
- `11` = DDD (São Paulo)
- `987654321` = Número

**Complete:** `5511987654321`

### 3️⃣ **Adicionar/Editar E-books**

**Abra o `index.html` e encontre esta seção:**

```html
<main class="catalog-container">
    <!-- E-BOOK 1 -->
    <div class="ebook-item">
        <div class="cover-image" style="background-image: url('IMAGEM.jpg');"></div>
        <div class="ebook-details">
            <h2>Título do E-book</h2>
            <p>Descrição breve...</p>
            <a href="https://api.whatsapp.com/send?phone=..." class="access-button">
                Aceder / Comprar Agora
            </a>
        </div>
    </div>
</main>
```

**Para adicionar novo e-book:**

1. Copie o bloco `<div class="ebook-item">...</div>`
2. Cole antes de `</main>`
3. Altere: título, descrição, imagem e link WhatsApp

**Exemplo Completo:**

```html
<div class="ebook-item">
    <div class="cover-image" style="background-image: url('https://via.placeholder.com/100x150/ff6b6b/ffffff?text=Novo+Livro');"></div>
    <div class="ebook-details">
        <h2>Novo E-book Espetacular</h2>
        <p>Uma descrição incrível do conteúdo deste e-book exclusivo.</p>
        <a href="https://api.whatsapp.com/send?phone=5511987654321&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20e-book%20%22Novo%20E-book%20Espetacular%22." target="_blank" class="access-button">
            Aceder / Comprar Agora
        </a>
    </div>
</div>
```

### 4️⃣ **Customizar Imagens dos E-books**

Use URLs de imagens online ou hospede suas próprias imagens:

**Opção 1: Placeholder (Temporário)**
```html
<div class="cover-image" style="background-image: url('https://via.placeholder.com/100x150/007bff/ffffff?text=Seu+Texto');"></div>
```

**Opção 2: Sua própria imagem (hospedada)**
```html
<div class="cover-image" style="background-image: url('https://seusite.com/imagens/capa.jpg');"></div>
```

**Opção 3: Imagem local (arquivo)**
```html
<div class="cover-image" style="background-image: url('capa_ebook_1.jpg');"></div>
```
> Neste caso, a imagem deve estar na mesma pasta que o HTML

---

## ⚙️ Configurações Avançadas

### 🎨 **Alterar Cores**

**No `style.css`, altere:**

```css
/* Cabeçalho - Azul para Verde */
.app-header {
    background: linear-gradient(135deg, #28a745 0%, #1e7e34 100%);
}

/* Botão - Verde para Roxo */
#whatsapp-agent {
    background: linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%);
}
```

### ⏱️ **Mudar Tempo de Aparição do WhatsApp**

**No `script.js`, altere:**

```javascript
// De 2 segundos para 5 segundos
setTimeout(() => {
    whatsappAgent.classList.add('active');
}, 5000); // 5000ms = 5 segundos
```

### 📜 **Fazer Aparecer ao Scroll**

**No `script.js`, descomente:**

```javascript
// De:
// setupScrollAppear();

// Para:
setupScrollAppear();
```

---

## 📱 Responsividade Testada

| Dispositivo | Tamanho | Status |
|-------------|--------|--------|
| Mobile | < 480px | ✅ Ótimo |
| Tablet | 480px - 768px | ✅ Ótimo |
| Desktop | > 768px | ✅ Ótimo |

---

## 🔧 Troubleshooting

### ❌ O WhatsApp não abre ao clicar

**Solução:** Verifique se:
- O número tem `55` + DDD + número (sem hífens)
- A URL começa com `https://api.whatsapp.com`
- Não há espaços em branco extras

### ❌ As imagens não aparecem

**Solução:**
- Verifique se a URL da imagem está correta
- Teste manualmente a URL em novo aba do navegador
- Use URLs HTTPS (não HTTP)

### ❌ O botão WhatsApp não aparece

**Solução:**
- Abra o console (F12 > Console)
- Procure por mensagens de erro
- Verifique se `script.js` está sendo carregado

---

## 📊 Rastreamento (Google Analytics)

Para rastrear cliques no WhatsApp, adicione no `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SEU_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-SEU_ID');
</script>
```

Substitua `G-SEU_ID` pelo seu ID do Google Analytics.

---

## 🌐 Deploy (Hospedar Online)

### Opção 1: **Netlify** (Gratuito e Fácil)

1. Vá para https://netlify.com
2. Clique em "Deploy manually"
3. Arraste a pasta com os 3 arquivos
4. Pronto! Seu site está online

### Opção 2: **GitHub Pages** (Gratuito)

1. Crie repositório no GitHub
2. Faça upload dos arquivos
3. Ative "GitHub Pages" nas configurações
4. Seu site estará em `seunome.github.io/nome-repo`

### Opção 3: **seu próprio hosting**

1. Upload via FTP dos 3 arquivos
2. Acesse via seu domínio

---

## 💡 Dicas de Ouro

✅ **Mantenha descrições curtas** - 1-2 linhas máximo  
✅ **Use imagens de qualidade** - Mínimo 100x150px  
✅ **Teste em mobile** - Use F12 > Toggle device  
✅ **Customize a mensagem WhatsApp** - Deixe mais persuasiva  
✅ **Atualize regularmente** - Adicione novos e-books  

---

## 📞 Suporte

Se tiver dúvidas:

1. Verifique este README completo
2. Teste no console (F12 > Console)
3. Valide URLs de imagens e WhatsApp
4. Teste em navegador diferente

---

## 📄 Licença

Este projeto é livre para uso pessoal e comercial. Sinta-se à vontade para customizar!

---

## 🎉 Bom Sucesso!

Agora você tem um **catálogo profissional e funcional** para vender seus e-books via WhatsApp.

**Próximos passos:**
1. ✏️ Configure seu número WhatsApp
2. 📷 Adicione suas capas de e-books
3. 📝 Edite as descrições
4. 🚀 Deploy para hospedar online
5. 💰 Comece a vender!

---

**Desenvolvido com ❤️ para criadores de conteúdo**

Versão 1.0 | Última atualização: Novembro 2025
