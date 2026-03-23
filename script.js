// PRODUTOS
const produtos = [
    {
        id: 'aura',
        nome: 'Aura',
        imagem: 'img/aura.jpeg',
        preco: 'R$ 109,90',
        pagina: 'aura.html'
    },
    {
        id: 'essence',
        nome: 'Essence Rouge',
        imagem: 'img/essence.jpeg',
        preco: 'R$ 109,90',
        pagina: 'essence.html'
    },
    {
        id: 'flor',
        nome: 'Flor de Seda',
        imagem: 'img/seda.jpeg',
        preco: 'R$ 109,90',
        pagina: 'flor.html'
    }
];

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', function() {
    // LOGIN
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // PRODUTOS
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        renderProducts();
    }
});

// LOGIN - REDIRECIONA PARA NOVA PÁGINA
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email === 'demo@afrodite.com' && password === '123456') {
        window.location.href = 'produtos.html'; // ✅ ABRE NOVA PÁGINA
    } else {
        alert('❌ Credenciais incorretas!\nDemo: demo@afrodite.com / 123456');
    }
}

// RENDERIZA PRODUTOS
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    
    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => {
            window.location.href = produto.pagina; // ✅ ABRE PÁGINA DO PRODUTO
        };
        
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="product-card-content">
                <h3>${produto.nome}</h3>
                <div class="product-card-price">${produto.preco}</div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}