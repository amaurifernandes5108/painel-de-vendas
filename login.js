const ADMIN_USER = "amauri fernandes";
const ADMIN_PASSWORD = "Adc26280403";

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminUser', username);
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = '❌ Usuário ou senha incorretos!';
        errorMessage.classList.add('show');
        
        setTimeout(() => {
            errorMessage.classList.remove('show');
        }, 3000);
        
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}

function logout() {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminUser');
    window.location.href = 'login.html';
}

console.log('%c🔐 Sistema de Login Ativo', 'color: #667eea; font-size: 14px; font-weight: bold;');
