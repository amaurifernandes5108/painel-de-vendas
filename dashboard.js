// ========================================
// DASHBOARD ADMIN - FUNCIONALIDADES COMPLETAS
// ========================================

// DADOS INICIAIS
let ebooks = [
    { id: 1, titulo: "O Livro da Fé", descricao: "Teologia & Espiritualidade", preco: 49.90, vendas: 145, rating: 4.8 },
    { id: 2, titulo: "Teologia Digital", descricao: "Para Criadores de Conteúdo", preco: 59.90, vendas: 89, rating: 4.9 },
    { id: 3, titulo: "Espiritualidade Prática", descricao: "Vida Espiritual Profunda", preco: 54.90, vendas: 104, rating: 4.7 },
    { id: 4, titulo: "Planilha Financeira", descricao: "Controle Financeiro", preco: 0, vendas: 56, rating: 4.9 },
    { id: 5, titulo: "Mentor Milionário", descricao: "Mapa da Prosperidade", preco: 0, vendas: 23, rating: 5.0 }
];

let clientes = [
    { id: 1, nome: "João Silva", email: "joao@email.com", whatsapp: "+55 24 99999-1111", compras: 3, total: 149.70, data: "15/10/2025" },
    { id: 2, nome: "Maria Santos", email: "maria@email.com", whatsapp: "+55 24 99999-2222", compras: 1, total: 59.90, data: "20/10/2025" },
    { id: 3, nome: "Pedro Costa", email: "pedro@email.com", whatsapp: "+55 24 99999-3333", compras: 2, total: 104.80, data: "22/10/2025" }
];

let vendas = [
    { id: 1, cliente: "João Silva", ebook: "O Livro da Fé", valor: 49.90, data: "11/11/2025", status: "Pago" },
    { id: 2, cliente: "Maria Santos", ebook: "Teologia Digital", valor: 59.90, data: "11/11/2025", status: "Pago" },
    { id: 3, cliente: "Pedro Costa", ebook: "Espiritualidade Prática", valor: 54.90, data: "10/11/2025", status: "Pendente" }
];

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('📊 Dashboard carregado!');
    
    setupMenuNavigation();
    setupThemeToggle();
    setupMenuToggle();
    initializeCharts();
    renderEbooksGrid();
    renderVendasTable();
    renderClientesTable();
    
    // Carregar dados do localStorage
    loadFromLocalStorage();
});

// ========================================
// MENU NAVIGATION
// ========================================

function setupMenuNavigation() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active de todos
            menuItems.forEach(m => m.classList.remove('active'));
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            
            // Adiciona active ao clicado
            this.classList.add('active');
            const section = this.getAttribute('data-section');
            const sectionContent = document.getElementById(section + '-content');
            
            if (sectionContent) {
                sectionContent.classList.add('active');
                document.getElementById('page-title').textContent = this.textContent.trim();
            }
        });
    });
}

// ========================================
// THEME TOGGLE
// ========================================

function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Carregar tema salvo
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️ Light';
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '☀️ Light' : '🌙 Dark';
    });
}

// ========================================
// MENU TOGGLE (Mobile)
// ========================================

function setupMenuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });
}

// ========================================
// E-BOOKS FUNCTIONS
// ========================================

function renderEbooksGrid() {
    const grid = document.querySelector('.ebooks-grid');
    grid.innerHTML = '';
    
    ebooks.forEach(ebook => {
        const card = document.createElement('div');
        card.className = 'ebook-card-admin';
        card.innerHTML = `
            <img src="https://via.placeholder.com/200x280/${Math.floor(Math.random()*16777215).toString(16)}/ffffff?text=${ebook.titulo.substring(0, 10)}" alt="${ebook.titulo}">
            <div class="ebook-info">
                <h3>${ebook.titulo}</h3>
                <p>${ebook.descricao}</p>
                <div class="ebook-stats">
                    <span>📊 ${ebook.vendas} vendas</span>
                    <span>⭐ ${ebook.rating}/5</span>
                </div>
                <div class="ebook-price">${ebook.preco > 0 ? 'R$ ' + ebook.preco.toFixed(2) : 'Especial'}</div>
                <div class="ebook-actions">
                    <button class="btn-small edit" onclick="editEbook(${ebook.id})">✏️ Editar</button>
                    <button class="btn-small delete" onclick="deleteEbook(${ebook.id})">🗑️ Deletar</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function addNewEbook() {
    const titulo = prompt('📚 Título do E-book:');
    if (!titulo) return;
    
    const descricao = prompt('📝 Descrição:');
    if (!descricao) return;
    
    const preco = prompt('💰 Preço (ou deixe em branco para "Especial"):');
    
    const novoEbook = {
        id: Math.max(...ebooks.map(e => e.id), 0) + 1,
        titulo,
        descricao,
        preco: preco ? parseFloat(preco) : 0,
        vendas: 0,
        rating: 5.0
    };
    
    ebooks.push(novoEbook);
    renderEbooksGrid();
    saveToLocalStorage();
    
    alert(`✅ E-book "${titulo}" adicionado com sucesso!`);
}

function editEbook(id) {
    const ebook = ebooks.find(e => e.id === id);
    if (!ebook) return;
    
    const titulo = prompt('📚 Título:', ebook.titulo);
    if (titulo === null) return;
    
    const descricao = prompt('📝 Descrição:', ebook.descricao);
    if (descricao === null) return;
    
    const preco = prompt('💰 Preço (ou deixe em branco para "Especial"):', ebook.preco > 0 ? ebook.preco : '');
    if (preco === null) return;
    
    ebook.titulo = titulo;
    ebook.descricao = descricao;
    ebook.preco = preco ? parseFloat(preco) : 0;
    
    renderEbooksGrid();
    saveToLocalStorage();
    
    alert(`✅ E-book "${titulo}" atualizado com sucesso!`);
}

function deleteEbook(id) {
    const ebook = ebooks.find(e => e.id === id);
    if (!ebook) return;
    
    if (confirm(`🗑️ Tem certeza que deseja deletar "${ebook.titulo}"?`)) {
        ebooks = ebooks.filter(e => e.id !== id);
        renderEbooksGrid();
        saveToLocalStorage();
        alert(`✅ E-book "${ebook.titulo}" deletado com sucesso!`);
    }
}

// ========================================
// VENDAS FUNCTIONS
// ========================================

function renderVendasTable() {
    const tbody = document.querySelector('#vendas-content .data-table tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    vendas.forEach(venda => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>#V-${String(venda.id).padStart(3, '0')}</td>
            <td>${venda.cliente}</td>
            <td>${venda.ebook}</td>
            <td>R$ ${venda.valor.toFixed(2)}</td>
            <td>${venda.data}</td>
            <td><span class="badge ${venda.status === 'Pago' ? 'success' : 'warning'}">${venda.status === 'Pago' ? '✓ Pago' : '⏳ Pendente'}</span></td>
            <td><button class="btn-action" onclick="verVenda(${venda.id})">Ver</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function verVenda(id) {
    const venda = vendas.find(v => v.id === id);
    if (!venda) return;
    
    alert(`
📊 DETALHES DA VENDA

ID: #V-${String(venda.id).padStart(3, '0')}
Cliente: ${venda.cliente}
E-book: ${venda.ebook}
Valor: R$ ${venda.valor.toFixed(2)}
Data: ${venda.data}
Status: ${venda.status}
    `);
}

function exportarVendas() {
    let csv = 'ID,Cliente,E-book,Valor,Data,Status\n';
    
    vendas.forEach(venda => {
        csv += `#V-${String(venda.id).padStart(3, '0')},${venda.cliente},"${venda.ebook}",R$ ${venda.valor.toFixed(2)},${venda.data},${venda.status}\n`;
    });
    
    const link = document.createElement('a');
    const blob = new Blob([csv], { type: 'text/csv' });
    link.href = URL.createObjectURL(blob);
    link.download = `vendas_${new Date().toLocaleDateString()}.csv`;
    link.click();
    
    alert('✅ Arquivo exportado com sucesso!');
}

// ========================================
// CLIENTES FUNCTIONS
// ========================================

function renderClientesTable() {
    const tbody = document.querySelector('#clientes-content .data-table tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    clientes.forEach(cliente => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${cliente.nome}</td>
            <td>${cliente.email}</td>
            <td>${cliente.whatsapp}</td>
            <td>${cliente.compras}</td>
            <td>R$ ${cliente.total.toFixed(2)}</td>
            <td>${cliente.data}</td>
            <td><span class="badge success">Ativo</span></td>
        `;
        tbody.appendChild(tr);
    });
}

function addNewCliente() {
    const nome = prompt('👤 Nome do cliente:');
    if (!nome) return;
    
    const email = prompt('📧 Email:');
    if (!email) return;
    
    const whatsapp = prompt('📱 WhatsApp (com código país):');
    if (!whatsapp) return;
    
    const novoCliente = {
        id: Math.max(...clientes.map(c => c.id), 0) + 1,
        nome,
        email,
        whatsapp,
        compras: 0,
        total: 0,
        data: new Date().toLocaleDateString('pt-BR')
    };
    
    clientes.push(novoCliente);
    renderClientesTable();
    saveToLocalStorage();
    
    alert(`✅ Cliente "${nome}" adicionado com sucesso!`);
}

// ========================================
// CONFIGURAÇÕES
// ========================================

function saveSettings() {
    const email = document.querySelector('.input-setting');
    if (email) {
        localStorage.setItem('email-contato', email.value);
        alert('✅ Configurações salvas com sucesso!');
    }
}

// ========================================
// CHARTS
// ========================================

let charts = {};

function initializeCharts() {
    // Gráfico Receita por Mês
    if (document.getElementById('chartReceita')) {
        const ctx1 = document.getElementById('chartReceita').getContext('2d');
        charts.receita = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [{
                    label: 'Receita (R$)',
                    data: [1200, 1900, 1500, 2200, 1800, 2100],
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: { responsive: true, plugins: { legend: { display: true } } }
        });
    }
    
    // Gráfico E-books Mais Vendidos
    if (document.getElementById('chartEbooks')) {
        const ctx2 = document.getElementById('chartEbooks').getContext('2d');
        charts.ebooks = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ebooks.map(e => e.titulo),
                datasets: [{
                    label: 'Vendas',
                    data: ebooks.map(e => e.vendas),
                    backgroundColor: ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#43e97b']
                }]
            },
            options: { responsive: true, plugins: { legend: { display: false } } }
        });
    }
    
    // Gráfico Origem dos Clientes
    if (document.getElementById('chartOrigem')) {
        const ctx3 = document.getElementById('chartOrigem').getContext('2d');
        charts.origem = new Chart(ctx3, {
            type: 'doughnut',
            data: {
                labels: ['WhatsApp', 'Email', 'Instagram', 'Google'],
                datasets: [{
                    data: [45, 25, 20, 10],
                    backgroundColor: ['#667eea', '#764ba2', '#f093fb', '#4facfe']
                }]
            },
            options: { responsive: true }
        });
    }
    
    // Gráfico Dispositivos
    if (document.getElementById('chartDispositivos')) {
        const ctx4 = document.getElementById('chartDispositivos').getContext('2d');
        charts.dispositivos = new Chart(ctx4, {
            type: 'pie',
            data: {
                labels: ['Mobile', 'Desktop', 'Tablet'],
                datasets: [{
                    data: [60, 30, 10],
                    backgroundColor: ['#667eea', '#764ba2', '#43e97b']
                }]
            },
            options: { responsive: true }
        });
    }
}

// ========================================
// LOCAL STORAGE
// ========================================

function saveToLocalStorage() {
    localStorage.setItem('dashboard-ebooks', JSON.stringify(ebooks));
    localStorage.setItem('dashboard-clientes', JSON.stringify(clientes));
    localStorage.setItem('dashboard-vendas', JSON.stringify(vendas));
}

function loadFromLocalStorage() {
    const savedEbooks = localStorage.getItem('dashboard-ebooks');
    const savedClientes = localStorage.getItem('dashboard-clientes');
    const savedVendas = localStorage.getItem('dashboard-vendas');
    
    if (savedEbooks) ebooks = JSON.parse(savedEbooks);
    if (savedClientes) clientes = JSON.parse(savedClientes);
    if (savedVendas) vendas = JSON.parse(savedVendas);
    
    renderEbooksGrid();
    renderVendasTable();
    renderClientesTable();
}

// ========================================
// BOTÃO EXPORTAR VENDAS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const exportBtn = document.querySelector('#vendas-content .btn-secondary');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportarVendas);
    }
    
    const addEbookBtn = document.querySelector('#ebooks-content .btn-primary');
    if (addEbookBtn) {
        addEbookBtn.addEventListener('click', addNewEbook);
    }
    
    const addClienteBtn = document.querySelector('#clientes-content .btn-primary');
    if (addClienteBtn) {
        addClienteBtn.addEventListener('click', addNewCliente);
    }
});

console.log('%c📊 Dashboard Admin - Todas as funcionalidades ativas!', 'color: #667eea; font-size: 14px; font-weight: bold;');
