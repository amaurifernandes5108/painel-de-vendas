# ✅ CHECKLIST DE CONFIGURAÇÃO RÁPIDA

Complete este checklist para deixar seu catálogo 100% funcional em 5 minutos!

---

## 📋 Pré-Requisitos

- [ ] Editor de texto (VSCode, Notepad++, etc)
- [ ] Navegador web atualizado
- [ ] Seu número WhatsApp com código do país (ex: 5511987654321)

---

## 🔧 PASSO 1: Configurar WhatsApp (2 MIN)

### 1.1 - Prepare seu Número

Seu número deve estar neste formato:
```
55 (código país) + 11 (DDD) + 987654321 (número)
= 5511987654321
```

- [ ] Número do Brasil? Comece com `55`
- [ ] Tem DDD? Inclua (ex: 11, 21, 85)
- [ ] Sem hífens ou espaços!

### 1.2 - Abra o `index.html` com editor de texto

- [ ] Clique direito no `index.html`
- [ ] Escolha "Abrir com" > "Bloco de Notas" ou "VSCode"

### 1.3 - Encontre e Substitua seu Número

**Use CTRL+H (Localizar e Substituir)**

**Procure por:**
```
5511999998888
```

**Substitua por:**
```
SEU_NÚMERO_AQUI
```

**Exemplo:**
```
5511987654321
```

- [ ] Substituição 1: Botão flutuante (final da página)
- [ ] Substituição 2: E-book 1
- [ ] Substituição 3: E-book 2
- [ ] Clique "Substituir Tudo" (deve aparecer "3 substituições")

### 1.4 - Salve o arquivo

- [ ] CTRL+S (ou Arquivo > Salvar)
- [ ] ✅ Feito!

---

## 📚 PASSO 2: Adicionar seus E-books (2 MIN)

### 2.1 - Editar E-book 1

**Procure por:**
```html
<h2>O Livro da Fé</h2>
```

**Substitua por:**
```html
<h2>Seu Título Aqui</h2>
```

- [ ] Título alterado

**Procure por:**
```html
<p>Uma análise profunda dos fundamentos teológicos...</p>
```

**Substitua por:**
```html
<p>Sua descrição aqui em 1-2 linhas</p>
```

- [ ] Descrição alterada

### 2.2 - Alterar Imagem do E-book 1

**Procure por:**
```html
style="background-image: url('https://via.placeholder.com/100x150/007bff/ffffff?text=Livro%201');"
```

**Substitua por:**
```html
style="background-image: url('https://via.placeholder.com/100x150/SEU_COR/ffffff?text=Seu%20Texto');"
```

**Cores disponíveis:**
- `007bff` = Azul
- `28a745` = Verde
- `dc3545` = Vermelho
- `fd7e14` = Laranja
- `6f42c1` = Roxo

**Exemplo:**
```html
style="background-image: url('https://via.placeholder.com/100x150/fd7e14/ffffff?text=Novo%20Livro');"
```

- [ ] Imagem alterada

### 2.3 - Repetir para E-books 2 e 3

- [ ] E-book 2: Título, descrição e imagem
- [ ] E-book 3: Título, descrição e imagem

### 2.4 - Salve novamente

- [ ] CTRL+S

---

## 🧪 PASSO 3: Testar (1 MIN)

### 3.1 - Abra no Navegador

- [ ] Clique duplo no `index.html`
- [ ] Ou arraste o arquivo para o navegador

### 3.2 - Verificações Visuais

- [ ] ✅ Cabeçalho aparece com "Biblioteca Digital"
- [ ] ✅ Os 3 e-books aparecem com títulos corretos
- [ ] ✅ As imagens carregaram
- [ ] ✅ Os botões "Aceder/Comprar" estão verdes

### 3.3 - Teste o WhatsApp

**Desktop:**
- [ ] Aguarde 2 segundos
- [ ] Botão 💬 aparece no canto inferior direito
- [ ] Clique no botão
- [ ] Deve abrir WhatsApp ou redirecionar

**Mobile:**
- [ ] Use F12 e ative modo responsivo (Ctrl+Shift+M)
- [ ] Altere para um tamanho de móvel (375px)
- [ ] O botão deve aparecer menor (apenas ícone)
- [ ] Clique - deve redirecionar

### 3.4 - Teste os E-books

- [ ] Clique em "Aceder/Comprar" do E-book 1
- [ ] Deve abrir WhatsApp com mensagem personalizada
- [ ] Repita para E-books 2 e 3

---

## 📊 PASSO 4: Avançado (Opcional)

### 4.1 - Mudar Tempo de Aparição

**Abra `script.js`**

**Procure:**
```javascript
}, 2000);
```

**Substitua `2000` por:**
- `1000` = 1 segundo
- `3000` = 3 segundos
- `5000` = 5 segundos

### 4.2 - Fazer Aparecer ao Scroll

**No `script.js`, encontre:**
```javascript
// setupScrollAppear();
```

**Remova o `//` para ativar:**
```javascript
setupScrollAppear();
```

### 4.3 - Alterar Cores

**Abra `style.css`**

**Procure por:**
```css
background: linear-gradient(135deg, #25d366 0%, #1ece63 100%);
```

**Substitua cores WhatsApp verdes:**
- `#25d366` verde claro
- `#1ece63` verde escuro

**Por suas cores (exemplos):**
- Azul: `#007bff`, `#0056b3`
- Roxo: `#6f42c1`, `#5a32a3`
- Vermelho: `#dc3545`, `#bb2d3b`

---

## 🚀 PASSO 5: Deploy Online (Opcional)

### 5.1 - Netlify (Recomendado - Gratuito)

- [ ] Vá para https://netlify.com
- [ ] Clique em "Deploy manually"
- [ ] Arraste a pasta com os 3 arquivos
- [ ] Pronto! Seu site está online

**Você receberá uma URL como:**
```
https://seu-nome-aleatorio.netlify.app
```

### 5.2 - Compartilhe

- [ ] Copie a URL
- [ ] Compartilhe no Instagram, WhatsApp, Email, etc

---

## 📞 TROUBLESHOOTING RÁPIDO

| Problema | Solução |
|----------|---------|
| WhatsApp não abre | Verifique se o número tem `55` + DDD + número (sem hífens) |
| Imagens não aparecem | Verifique se a URL começa com `https://` |
| Botão não aparece | Abra console (F12) e procure por erros vermelhos |
| Texto errado na mensagem WhatsApp | Edite a URL e substitua `%20` por espaço |

---

## ✨ Checklist Final

- [ ] Número WhatsApp configurado (3 lugares)
- [ ] Títulos dos e-books atualizados
- [ ] Descrições dos e-books atualizadas
- [ ] Imagens carregam corretamente
- [ ] Botões WhatsApp funcionam
- [ ] Responsividade testada (mobile/tablet/desktop)
- [ ] Arquivo salvo
- [ ] Pronto para usar!

---

## 🎉 Parabéns!

Seu catálogo de e-books está **100% funcional** e pronto para vender! 

**Próximos passos:**
1. Teste com seus clientes
2. Compartilhe em suas redes
3. Customize conforme necessário
4. Monitore as vendas! 📈

---

**Tempo total: ~5 minutos** ⏱️

Boa sorte! 🚀
