// Ativar o ScrollSpy do Bootstrap
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#mainNav',
    offset: 100
});

// Lógica de Modo Escuro (Dark Mode)
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlElement = document.documentElement;

// Verifica preferência anterior do usuário
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-bs-theme', savedTheme);
updateThemeUI(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeUI(newTheme);
});

function updateThemeUI(theme) {
    if (theme === 'dark') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        themeIcon.style.color = '#ffda44'; // Cor de sol
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeIcon.style.color = '#ffffff'; // Cor da lua na navbar escura
    }
}

// Fechar menu mobile automaticamente ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (menuToggle.classList.contains('show')) {
            new bootstrap.Collapse(menuToggle).toggle();
        }
    });
});

// Manipulação do formulário
document.getElementById('futureForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn = this.querySelector('button');
    submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Processando...';
    submitBtn.disabled = true;

    setTimeout(() => {
        alert('Chamado recebido! Nossa Stack entrará em contato em breve.');
        submitBtn.innerHTML = 'SOLICITAR CONSULTORIA';
        submitBtn.disabled = false;
        this.reset();
    }, 2000);
});