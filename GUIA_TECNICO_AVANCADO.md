# 🔧 GUIA TÉCNICO AVANÇADO

Para usuários com conhecimento HTML/CSS/JavaScript que desejam customizações profundas.

---

## 📚 Índice

1. [Estrutura HTML](#estrutura-html)
2. [Classes CSS](#classes-css)
3. [Variáveis JavaScript](#variáveis-javascript)
4. [Customizações Avançadas](#customizações-avançadas)
5. [Integração com APIs](#integração-com-apis)

---

## 🏗️ Estrutura HTML

### Hierarquia Principal

```
html
  ├── head
  │   └── <meta>, <title>, <link rel="stylesheet">
  └── body
      ├── header.app-header
      ├── main.catalog-container
      │   └── div.ebook-item (repetido)
      │       ├── div.cover-image
      │       └── div.ebook-details
      │           ├── h2
      │           ├── p
      │           └── a.access-button
      ├── footer.app-footer
      ├── a#whatsapp-agent
      └── script
```

### Componentes Reutilizáveis

#### Component 1: E-book Item

```html
<div class="ebook-item">
    <div class="cover-image" style="background-image: url('URL');"></div>
    <div class="ebook-details">
        <h2>Título</h2>
        <p>Descrição</p>
        <a href="https://api.whatsapp.com/send?phone=..." class="access-button">
            Aceder / Comprar Agora
        </a>
    </div>
</div>
```

#### Component 2: WhatsApp Button

```html
<a id="whatsapp-agent" href="https://api.whatsapp.com/send?phone=...&text=...">
    <span class="icon">💬</span>
    <span class="text">Fale conosco</span>
</a>
```

---

## 🎨 Classes CSS Principais

### Classes Estruturais

| Classe | Propósito | Elementos |
|--------|-----------|----------|
| `.app-header` | Cabeçalho principal | `<header>` |
| `.catalog-container` | Container do catálogo | `<main>` |
| `.ebook-item` | Item individual de e-book | `<div>` |
| `.cover-image` | Capa do e-book | `<div>` |
| `.ebook-details` | Detalhes do e-book | `<div>` |
| `.access-button` | Botão de compra | `<a>` |
| `.app-footer` | Rodapé | `<footer>` |

### ID Único

| ID | Propósito |
|----|-----------|
| `#whatsapp-agent` | Botão flutuante do WhatsApp |

### Estados CSS

```css
/* Classe ativa (para JavaScript) */
.active { }

/* Estados de interação */
:hover { }
:active { }
:focus { }

/* Media queries */
@media (max-width: 768px) { }
@media (max-width: 480px) { }
```

---

## ⚙️ Variáveis CSS Customizáveis

### Cores

```css
/* Primárias */
--primary-blue: #007bff;
--primary-green: #25d366;

/* Secundárias */
--secondary-dark-blue: #0056b3;
--secondary-dark-green: #1ece63;

/* Neutras */
--color-text: #333;
--color-bg: #f4f7fa;
--color-white: white;
```

### Tipografia

```css
--font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
--font-size-h1: 2.2em;
--font-size-h2: 1.3em;
--font-size-p: 0.95em;
--font-weight-bold: 700;
```

### Espaçamentos

```css
--padding-header: 40px 20px;
--padding-item: 20px;
--margin-bottom-item: 25px;
--gap-flex: 8px;
```

### Outros

```css
--border-radius: 12px;
--box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
--transition: all 0.3s ease;
```

---

## 🔌 Variáveis JavaScript

### Seletores Principais

```javascript
const whatsappAgent = document.getElementById('whatsapp-agent');
const ebookItems = document.querySelectorAll('.ebook-item');
const accessButtons = document.querySelectorAll('.access-button');
const catalogContainer = document.querySelector('.catalog-container');
```

### Configurações

```javascript
// Tempo de aparição (ms)
const WHATSAPP_DELAY = 2000;

// Dispositivo
const DEVICE_TYPE = getDeviceType();

// URLs
const WHATSAPP_BASE_URL = 'https://api.whatsapp.com/send';
```

---

## 🚀 Customizações Avançadas

### 1️⃣ Adicionar Sistema de Filtros

```html
<!-- HTML -->
<div class="filters">
    <button class="filter-btn active" data-filter="all">Todos</button>
    <button class="filter-btn" data-filter="theology">Teologia</button>
    <button class="filter-btn" data-filter="spirituality">Espiritualidade</button>
</div>

<div class="catalog-container">
    <div class="ebook-item" data-category="theology">...</div>
    <div class="ebook-item" data-category="spirituality">...</div>
</div>
```

```javascript
// JavaScript
const filterBtns = document.querySelectorAll('.filter-btn');
const ebookItems = document.querySelectorAll('.ebook-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        ebookItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
```

### 2️⃣ Adicionar Sistema de Busca

```html
<!-- HTML -->
<input type="text" id="search-input" placeholder="Buscar e-books...">
```

```javascript
// JavaScript
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    ebookItems.forEach(item => {
        const title = item.querySelector('h2').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
```

### 3️⃣ Adicionar Carrinho de Compras (LocalStorage)

```javascript
// JavaScript
const cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(ebookTitle, ebookPrice) {
    const item = { title: ebookTitle, price: ebookPrice };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${ebookTitle} adicionado ao carrinho!`);
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function clearCart() {
    localStorage.setItem('cart', JSON.stringify([]));
}
```

### 4️⃣ Sistema de Avaliações

```html
<!-- HTML -->
<div class="rating">
    <span class="star" data-value="1">⭐</span>
    <span class="star" data-value="2">⭐</span>
    <span class="star" data-value="3">⭐</span>
    <span class="star" data-value="4">⭐</span>
    <span class="star" data-value="5">⭐</span>
</div>
```

```javascript
// JavaScript
const stars = document.querySelectorAll('.star');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        localStorage.setItem('rating', rating);
        console.log(`Avaliação: ${rating} estrelas`);
    });
});
```

### 5️⃣ Dark Mode

```css
/* CSS */
@media (prefers-color-scheme: dark) {
    :root {
        --bg-color: #1a1a2e;
        --text-color: #e0e0e0;
        --card-bg: #2a2a3e;
    }
    
    body {
        background-color: var(--bg-color);
        color: var(--text-color);
    }
    
    .ebook-item {
        background-color: var(--card-bg);
    }
}

/* Toggle Button */
<button id="dark-mode-toggle">🌙 Dark Mode</button>

/* JavaScript */
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
```

---

## 🔗 Integração com APIs

### 1️⃣ Google Analytics

```html
<!-- HTML -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SEU_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-SEU_ID');
</script>
```

```javascript
// JavaScript - Rastrear cliques
function trackWhatsAppClick() {
    gtag('event', 'whatsapp_click', {
        'event_category': 'engagement',
        'event_label': 'agente_vendas'
    });
}
```

### 2️⃣ Integração com Kiwify

```javascript
// JavaScript
const KIWIFY_API_KEY = 'SEU_API_KEY';

async function getEbookData() {
    try {
        const response = await fetch(`https://api.kiwify.com.br/...`, {
            headers: {
                'Authorization': `Bearer ${KIWIFY_API_KEY}`
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}
```

### 3️⃣ Envio de Dados via FormSubmit

```html
<!-- HTML -->
<form action="https://formsubmit.co/seu@email.com" method="POST">
    <input type="email" name="email" required>
    <input type="text" name="ebook-interesse" required>
    <button type="submit">Enviar</button>
</form>
```

### 4️⃣ WebHook para Discord

```javascript
// JavaScript
async function sendToDiscord(message) {
    const webhookURL = 'SEU_WEBHOOK_URL';
    
    await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: `🔔 Novo interesse: ${message}`
        })
    });
}
```

---

## 📊 Performance Optimization

### 1️⃣ Lazy Loading de Imagens

```html
<!-- HTML -->
<div class="cover-image" loading="lazy" src="url"></div>
```

### 2️⃣ Minificação CSS/JS

Use ferramentas online:
- https://csso.io/ (CSS)
- https://javascript-minifier.com/ (JS)

### 3️⃣ Compressão de Imagens

- https://tinypng.com/
- https://imageoptim.com/

### 4️⃣ Cache Control

```html
<!-- HTML -->
<meta http-equiv="Cache-Control" content="max-age=3600">
```

---

## 🧪 Testing

### Testes Manuais

```javascript
// Console - Teste de elementos
console.log(document.querySelectorAll('.ebook-item').length); // Deve retornar 3
console.log(document.getElementById('whatsapp-agent')); // Deve retornar elemento
```

### Testes de Performance

```javascript
// Measure Performance
const perfData = window.performance.timing;
const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
console.log(`Tempo de carregamento: ${pageLoadTime}ms`);
```

---

## 🐛 Debug

### Console Methods

```javascript
console.log('Info:', data);      // Informação
console.warn('Aviso:', data);    // Aviso
console.error('Erro:', data);    // Erro
console.table(arrayData);        // Tabela
console.time('label');           // Timer início
console.timeEnd('label');        // Timer fim
```

### DevTools F12

- **Elements**: Inspecione HTML/CSS
- **Console**: Veja erros e logs
- **Network**: Monitore requisições
- **Performance**: Analise velocidade
- **Application**: Veja localStorage/cookies

---

## 📦 Deployment

### Environment Variables (.env)

```
WHATSAPP_NUMBER=5511987654321
KIWIFY_API_KEY=seu_api_key
GOOGLE_ANALYTICS_ID=G-SEU_ID
```

### Build Script (package.json)

```json
{
  "scripts": {
    "build": "npm run minify && npm run optimize",
    "deploy": "netlify deploy"
  }
}
```

---

## 🔐 Security

### HTTPS Only
```javascript
if (location.protocol !== 'https:') {
    location.protocol = 'https:';
}
```

### XSS Prevention
```javascript
// ❌ EVITE
element.innerHTML = userInput;

// ✅ USE
element.textContent = userInput;
```

### CORS Headers
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST
```

---

## 📚 Recursos Adicionais

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Web.dev](https://web.dev/)

---

**Desenvolvido para developers! 👨‍💻**

Versão 1.0 | Última atualização: Novembro 2025
