// ========================================
// CATÁLOGO DE E-BOOKS - AGENTE WHATSAPP
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const whatsappAgent = document.getElementById('whatsapp-agent');
    
    // OPÇÃO 1: Aparece após 2 segundos (PADRÃO)
    setTimeout(() => {
        whatsappAgent.classList.add('active');
        console.log('✅ Agente WhatsApp ativado');
    }, 2000);

    // OPÇÃO 2: Descomente a linha abaixo para aparecer ao fazer scroll
    // setupScrollAppear();

    // OPÇÃO 3: Descomente a linha abaixo para aparecer imediatamente
    // whatsappAgent.classList.add('active');

    // Feedback ao clicar
    whatsappAgent.addEventListener('click', function() {
        console.log('🔗 Redirecionando para WhatsApp...');
    });
});

// ========================================
// FUNÇÃO ALTERNATIVA: Aparecer ao Scroll
// ========================================
function setupScrollAppear() {
    const whatsappAgent = document.getElementById('whatsapp-agent');
    let hasAppeared = false;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 400 && !hasAppeared) {
            whatsappAgent.classList.add('active');
            hasAppeared = true;
            console.log('✅ Agente WhatsApp apareceu ao scroll');
        }
    });
}

// ========================================
// FUNÇÃO: Contador de Cliques (Opcional)
// ========================================
function setupClickCounter() {
    const whatsappAgent = document.getElementById('whatsapp-agent');
    let clickCount = 0;

    whatsappAgent.addEventListener('click', function(e) {
        clickCount++;
        console.log(`🔗 WhatsApp clicado ${clickCount} vez(es)`);
        
        // Você pode enviar isso para Google Analytics ou seu servidor
        // trackEvent('whatsapp_click', { count: clickCount });
    });
}

// ========================================
// FUNÇÃO: Rastreamento com Google Analytics (Opcional)
// ========================================
function trackWhatsAppClick() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'event_category': 'engagement',
            'event_label': 'agente_vendas'
        });
        console.log('📊 Clique registrado no Google Analytics');
    }
}

// Adicione esta linha no seu index.html se quiser rastrear:
// <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>

// ========================================
// FUNÇÃO: Detecção de Dispositivo
// ========================================
function getDeviceType() {
    const userAgent = navigator.userAgent;
    if (/mobile/i.test(userAgent)) {
        return 'mobile';
    } else if (/tablet/i.test(userAgent)) {
        return 'tablet';
    } else {
        return 'desktop';
    }
}

console.log('📱 Dispositivo detectado:', getDeviceType());

// ========================================
// FUNÇÃO: Teste de Conexão
// ========================================
function checkWhatsAppConnection() {
    const whatsappAgent = document.getElementById('whatsapp-agent');
    const href = whatsappAgent.getAttribute('href');
    
    if (href && href.includes('api.whatsapp.com')) {
        console.log('✅ Link WhatsApp válido');
        return true;
    } else {
        console.warn('⚠️ Link WhatsApp inválido ou não configurado');
        return false;
    }
}

checkWhatsAppConnection();

// ========================================
// LOG DE INICIALIZAÇÃO
// ========================================
console.log('%c🚀 Catálogo de E-books Carregado', 'color: #25d366; font-size: 16px; font-weight: bold;');
console.log('%c📚 Sistema pronto para vendas via WhatsApp', 'color: #007bff; font-size: 12px;');
