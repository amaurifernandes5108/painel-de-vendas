// ========================================
// DASHBOARD ADMINISTRATIVO - JAVASCRIPT
// ========================================

let chartInstances = {};

// ================= INICIALIZAÇÃO =================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Dashboard carregado com sucesso!');
    
    // Inicializar navegação
    setupNavigation();
    
    // Inicializar gráficos
    initCharts();
    
    // Inicializar tema
    setupTheme();
    
    // Inicializar menu responsivo
    setupResponsiveMenu();
    
    // Carregar dados
    loadDashboardData();
});

// ================= NAVEGAÇÃO =================
function setupNavigation() {
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active de todos
            menuItems.forEach(m => m.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Adiciona active ao clicado
            this.classList.add('active');
            const sectionId = this.dataset.section + '-content';
            document.getElementById(sectionId).classList.add('active');
            
            // Atualiza título
            updatePageTitle(this.querySelector('.label').textContent);
            
            // Recria gráficos se necessário
            setTimeout(() => {
                Object.values(chartInstances).forEach(chart => {
                    if (chart && typeof chart.resize === 'function') {
                        chart.resize();
                    }
                });
            }, 100);
            
            // Fecha menu em mobile
            const sidebar = document.querySelector('.sidebar');
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });
}

function updatePageTitle(title) {
    const pageTitle = document.getElementById('page-title');
    const icons = {
        'Dashboard': '📊',
        'E-books': '📚',
        'Vendas': '💰',
        'Clientes': '👥',
        'Analytics': '📈',
        'Configurações': '⚙️'
    };
    pageTitle.textContent = (icons[title] || '') + ' ' + title;
}

// ================= GRÁFICOS =================
function initCharts() {
    // Gráfico 1: Receita por Mês
    createChartReceita();
    
    // Gráfico 2: E-books Mais Vendidos
    createChartEbooks();
    
    // Gráfico 3: Origem dos Clientes
    createChartOrigem();
    
    // Gráfico 4: Acessos por Dispositivo
    createChartDispositivos();
    
    // Gráfico 5: Conversão por Semana
    createChartConversao();
}

function createChartReceita() {
    const ctx = document.getElementById('chartReceita').getContext('2d');
    chartInstances.receita = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov'],
            datasets: [{
                label: 'Receita (R$)',
                data: [1200, 1900, 3200, 2800, 3900, 4200, 3800, 4500, 5200, 4800, 6200],
                borderColor: '#007bff',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#007bff',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-dark').trim(),
                        font: {
                            size: 12,
                            weight: '600'
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-light').trim()
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.05)'
                    }
                },
                x: {
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-light').trim()
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function createChartEbooks() {
    const ctx = document.getElementById('chartEbooks').getContext('2d');
    chartInstances.ebooks = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['O Livro da Fé', 'Teologia Digital', 'Espiritualidade Prática'],
            datasets: [{
                data: [145, 89, 104],
                backgroundColor: [
                    'rgba(0, 123, 255, 0.8)',
                    'rgba(40, 167, 69, 0.8)',
                    'rgba(220, 53, 69, 0.8)'
                ],
                borderColor: [
                    '#007bff',
                    '#28a745',
                    '#dc3545'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-dark').trim(),
                        font: {
                            size: 12,
                            weight: '600'
                        },
                        padding: 15
                    }
                }
            }
        }
    });
}

function createChartOrigem() {
    const ctx = document.getElementById('chartOrigem').getContext('2d');
    chartInstances.origem = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Instagram', 'WhatsApp', 'Email', 'Direto', 'Outros'],
            datasets: [{
                data: [35, 25, 20, 15, 5],
                backgroundColor: [
                    'rgba(255, 107, 107, 0.8)',
                    'rgba(76, 175, 80, 0.8)',
                    'rgba(33, 150, 243, 0.8)',
                    'rgba(156, 39, 176, 0.8)',
                    'rgba(255, 193, 7, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-dark').trim(),
                        padding: 15
                    }
                }
            }
        }
    });
}

function createChartDispositivos() {
    const ctx = document.getElementById('chartDispositivos').getContext('2d');
    chartInstances.dispositivos = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Desktop', 'Mobile', 'Tablet'],
            datasets: [{
                label: 'Acessos',
                data: [3200, 4100, 1900],
                backgroundColor: [
                    'rgba(100, 181, 246, 0.8)',
                    'rgba(76, 175, 80, 0.8)',
                    'rgba(255, 152, 0, 0.8)'
                ]
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-light').trim()
                    }
                },
                y: {
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-light').trim()
                    }
                }
            }
        }
    });
}

function createChartConversao() {
    const ctx = document.getElementById('chartConversao').getContext('2d');
    chartInstances.conversao = new Chart(ctx, {
        type: 'area',
        data: {
            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
            datasets: [
                {
                    label: 'Visitantes',
                    data: [150, 200, 180, 220, 210, 190, 160],
                    borderColor: '#007bff',
                    backgroundColor: 'rgba(0, 123, 255, 0.1)',
                    borderWidth: 2,
                    tension: 0.4
                },
                {
                    label: 'Conversões',
                    data: [12, 19, 15, 22, 18, 14, 11],
                    borderColor: '#28a745',
                    backgroundColor: 'rgba(40, 167, 69, 0.1)',
                    borderWidth: 2,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-dark').trim()
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-light').trim()
                    }
                },
                x: {
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-light').trim()
                    }
                }
            }
        }
    });
}

// ================= TEMA =================
function setupTheme() {
    const themeToggle = document.getElementById('theme-toggle');
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

// ================= MENU RESPONSIVO =================
function setupResponsiveMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // Fechar sidebar ao clicar fora
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.sidebar') && !e.target.closest('.menu-toggle')) {
                sidebar.classList.remove('active');
            }
        }
    });
}

// ================= DADOS =================
function loadDashboardData() {
    console.log('📊 Dados do dashboard carregados');
    // Aqui você conectaria com sua API
    // const data = await fetch('/api/dashboard');
}

// ================= FUNÇÕES ÚTEIS =================
function addNewEbook() {
    alert('🚀 Formulário para adicionar novo e-book');
    // Implementar modal ou redirecionamento
}

function exportarDados() {
    alert('📥 Exportando dados...');
    // Implementar exportação CSV/Excel
}

// ================= BUSCA =================
const searchBox = document.querySelector('.search-box');
searchBox?.addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    console.log('🔍 Buscando:', query);
    // Implementar lógica de busca
});

// ================= RESPONSIVE =================
window.addEventListener('resize', function() {
    Object.values(chartInstances).forEach(chart => {
        if (chart && typeof chart.resize === 'function') {
            chart.resize();
        }
    });
});

// ================= NOTIFICAÇÕES (Simuladas) =================
function showNotification(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
    // Implementar sistema de notificações visual
}

// ================= LOGS =================
console.log('%c🎉 Dashboard Administrativo Carregado', 'color: #007bff; font-size: 16px; font-weight: bold;');
console.log('%c✅ Funcionalidades ativas:', 'color: #28a745; font-size: 12px;');
console.log('📊 Dashboard | 📚 E-books | 💰 Vendas | 👥 Clientes | 📈 Analytics | ⚙️ Configurações');
