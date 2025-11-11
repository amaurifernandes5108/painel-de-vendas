// ========================================
// AGENTE DE VENDAS - CHATBOT INTERATIVO
// ========================================

const agenteToggle = document.getElementById('agenteToggle');
const agenteChat = document.getElementById('agenteChat');
const agenteClose = document.getElementById('agenteClose');
const agenteMessages = document.getElementById('agenteMessages');
const agenteInput = document.getElementById('agenteInput');
const agenteContainer = document.getElementById('agenteContainer');

let mensagensCnt = [];

// ================= INICIALIZAÇÃO =================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🤖 Agente de Vendas Carregado');
    
    setupAgente();
    carregarMensagensArmazenadas();
});

function setupAgente() {
    // Toggle chat
    agenteToggle.addEventListener('click', abrirChat);
    agenteClose.addEventListener('click', fecharChat);
    
    // Input
    agenteInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            enviarMensagemInput();
        }
    });
}

// ================= ABRIR/FECHAR CHAT =================
function abrirChat() {
    agenteChat.classList.add('active');
    agenteToggle.classList.add('hidden');
    agenteInput.focus();
    scrollParaBaixo();
}

function fecharChat() {
    agenteChat.classList.remove('active');
    agenteToggle.classList.remove('hidden');
}

// ================= ENVIAR MENSAGENS =================
function enviarMensagemInput() {
    const texto = agenteInput.value.trim();
    
    if (texto === '') return;
    
    enviarMensagem(texto);
    agenteInput.value = '';
    agenteInput.focus();
}

function enviarMensagem(texto) {
    // Adicionar mensagem do usuário
    adicionarMensagem(texto, 'user');
    
    // Salvar
    salvarMensagem(texto, 'user');
    
    // Simular digitação
    mostrarDigitando();
    
    // Responder após delay
    setTimeout(() => {
        const resposta = gerarResposta(texto);
        adicionarMensagem(resposta, 'bot');
        salvarMensagem(resposta, 'bot');
        removerDigitando();
    }, 1000 + Math.random() * 1000);
}

// ================= ADICIONAR MENSAGEM AO CHAT =================
function adicionarMensagem(texto, tipo) {
    const mensagemEl = document.createElement('div');
    mensagemEl.className = `mensagem ${tipo}`;
    
    const agora = new Date();
    const hora = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    mensagemEl.innerHTML = `
        <div>
            <div class="mensagem-content">${escaparHTML(texto)}</div>
            <span class="mensagem-time">${hora}</span>
        </div>
    `;
    
    agenteMessages.appendChild(mensagemEl);
    scrollParaBaixo();
}

function mostrarDigitando() {
    const digitandoEl = document.createElement('div');
    digitandoEl.className = 'mensagem bot';
    digitandoEl.id = 'digitando';
    digitandoEl.innerHTML = `
        <div class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    agenteMessages.appendChild(digitandoEl);
    scrollParaBaixo();
}

function removerDigitando() {
    const digitando = document.getElementById('digitando');
    if (digitando) {
        digitando.remove();
    }
}

function scrollParaBaixo() {
    setTimeout(() => {
        agenteMessages.scrollTop = agenteMessages.scrollHeight;
    }, 0);
}

// ================= IA - GERAR RESPOSTA =================
function gerarResposta(mensagem) {
    const mensagemLower = mensagem.toLowerCase();
    
    // Padrões de reconhecimento
    const padroes = [
        {
            palavras: ['ebook', 'livro', 'produto'],
            respostas: [
                '📚 Temos 3 e-books incríveis! Qual te interessa?\n\n1️⃣ O Livro da Fé - R$ 49,90\n2️⃣ Teologia Digital - R$ 59,90\n3️⃣ Espiritualidade Prática - R$ 54,90',
                'Nossos e-books são focados em teologia e desenvolvimento espiritual. Quer saber mais sobre algum em especial?',
                '📖 Todos os nossos produtos têm conteúdo exclusivo e de qualidade! Qual area te interessa mais?'
            ]
        },
        {
            palavras: ['preço', 'valor', 'custa', 'quanto'],
            respostas: [
                '💰 Nossos preços são:\n• O Livro da Fé: R$ 49,90\n• Teologia Digital: R$ 59,90\n• Espiritualidade Prática: R$ 54,90\n\nTem desconto para combo de 3!',
                'Os valores são bem acessíveis! Quer detalhes de algum produto?',
                '📊 Temos os melhores preços do mercado com máxima qualidade!'
            ]
        },
        {
            palavras: ['como funciona', 'como comprar', 'processo'],
            respostas: [
                '🛒 É muito simples!\n1. Clique no e-book que quer\n2. Converse comigo via WhatsApp\n3. Efetue o pagamento\n4. Receba o acesso instantâneo!',
                'O processo é super rápido! Escolhe o e-book → Manda mensagem → Paga → Recebe! Quer começar?',
                '✅ Tudo é automático e seguro. Qual e-book te interessa?'
            ]
        },
        {
            palavras: ['contato', 'whatsapp', 'fone', 'telefone'],
            respostas: [
                '📱 Você pode falar comigo direto pelo WhatsApp!\n+55 24 99832-1054\n\nOu clique no botão de WhatsApp do site!',
                '💬 Meu WhatsApp: +55 24 99832-1054\nEstou sempre online para ajudar! 😊',
                'Entre em contato comigo: +55 24 99832-1054\nRespondo rápido!'
            ]
        },
        {
            palavras: ['suporte', 'ajuda', 'dúvida', 'problema'],
            respostas: [
                '🆘 Estou aqui para ajudar! Qual é sua dúvida?\nPosso responder sobre:\n• Produtos\n• Pagamento\n• Acesso\n• Conteúdo',
                'Qual sua dúvida? Estou aqui para resolver! 💪',
                'Fique à vontade em perguntar tudo. Tenho prazer em ajudar!'
            ]
        },
        {
            palavras: ['obrigado', 'valeu', 'thanks', 'brigadão'],
            respostas: [
                '😊 De nada! É um prazer ajudar! Quer mais alguma coisa?',
                'Por nada! Qualquer dúvida, é só chamar! 🤖',
                '✨ Fico feliz em ajudar! Tem mais algo que queira saber?'
            ]
        },
        {
            palavras: ['oi', 'olá', 'opa', 'e aí'],
            respostas: [
                '👋 Oi! Tudo bem? Como posso ajudá-lo?',
                'Olá! Bem-vindo! Quer saber sobre nossos e-books?',
                'E aí! 😊 Vem conversar comigo sobre nossos produtos!'
            ]
        },
        {
            palavras: ['reembolso', 'garantia', 'refund'],
            respostas: [
                '💯 Temos garantia total! Se não gostar, devolvemos seu dinheiro dentro de 7 dias.',
                'Sim! Se não ficar satisfeito, fazemos reembolso integral em 7 dias! 100% de confiança.',
                '✅ Oferecemos 7 dias de garantia sem perguntas! Sua satisfação é nossa prioridade.'
            ]
        }
    ];
    
    // Procurar correspondência
    for (let padrao of padroes) {
        for (let palavra of padrao.palavras) {
            if (mensagemLower.includes(palavra)) {
                return padrao.respostas[Math.floor(Math.random() * padrao.respostas.length)];
            }
        }
    }
    
    // Resposta padrão
    const respostasDefault = [
        '🤔 Entendi! Quer conversar mais? Posso ajudar com:\n• Informações sobre e-books\n• Preços\n• Processo de compra\n• Suporte técnico',
        'Interessante! 📝 Quer saber mais sobre nossos produtos?',
        '👍 Entendi sua mensagem. Posso ajudar com informações sobre e-books, preços ou vendas!',
        'Legal! 😊 Qual é sua próxima dúvida?',
        '💬 Tá certo! Quer falar sobre nossos e-books?'
    ];
    
    return respostasDefault[Math.floor(Math.random() * respostasDefault.length)];
}

// ================= ARMAZENAMENTO LOCAL =================
function salvarMensagem(texto, tipo) {
    mensagensCnt.push({ texto, tipo, data: new Date() });
    
    // Limitar a 50 mensagens
    if (mensagensCnt.length > 50) {
        mensagensCnt.shift();
    }
    
    localStorage.setItem('mensagensAgente', JSON.stringify(mensagensCnt));
}

function carregarMensagensArmazenadas() {
    const salvas = localStorage.getItem('mensagensAgente');
    if (salvas) {
        try {
            mensagensCnt = JSON.parse(salvas);
            // Mostrar últimas 10
            const ultimas = mensagensCnt.slice(-10);
            agenteMessages.innerHTML = '';
            ultimas.forEach(msg => {
                const tipo = msg.tipo === 'user' ? 'user' : 'bot';
                adicionarMensagem(msg.texto, tipo);
            });
        } catch (e) {
            console.error('Erro ao carregar mensagens:', e);
        }
    }
}

// ================= UTILITÁRIOS =================
function escaparHTML(texto) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return texto.replace(/[&<>"']/g, m => map[m]);
}

// ================= INTEGRAÇÃO COM WHATSAPP =================
function abrirWhatsApp() {
    const numero = '5524998321054';
    const mensagem = 'Olá! Gostaria de conversar mais sobre os e-books.';
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// ================= LOGS =================
console.log('%c🤖 Agente de Vendas Ativo', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%c✨ Funcionalidades:', 'color: #764ba2; font-size: 12px;');
console.log('💬 Chat interativo | 📱 Integração WhatsApp | 💾 Histórico salvo | 🎨 Dark mode');
