// Configuração - Substitua pelo seu número do WhatsApp (apenas números, sem espaços ou caracteres especiais)
const WHATSAPP_NUMBER = '5511999999999'; // Exemplo: 5511999999999 (código do país + DDD + número)

// Imagens de fundo dos slides do carrossel
// Substitua pelas URLs das suas imagens ou use caminhos locais (ex: 'images/banner1.jpg')
const bannerImages = [
    'https://cdn.pixabay.com/photo/2016/10/22/08/06/mug-holder-1760093_1280.jpg', // Imagem do primeiro slide
    'https://cdn.pixabay.com/photo/2020/04/17/22/25/coffee-mug-5057116_1280.jpg', // Imagem do segundo slide
    'https://cdn.pixabay.com/photo/2019/09/13/19/18/coffee-4474690_1280.jpg'  // Imagem do terceiro slide
];

// Dados dos produtos
// Para cada produto, você pode usar:
// - URL de imagem: 'images/caneca1.jpg' ou 'https://exemplo.com/imagem.jpg'
// - Emoji: '☕' (será exibido como fallback se a imagem não carregar)
const products = [
    {
        id: 1,
        name: 'Caneca Minimalista Elegante',
        description: 'Design clean e sofisticado, perfeita para seu café da manhã especial.',
        price: 'R$ 49,90',
        image: 'https://thumbor.cartpanda.com/Yz-NTooOBZraMyYnjn7dPF7Ipac=/795x0/https://assets.mycartpanda.com/static/products_images/f0/5b/56/1745274495.jpg', // Substitua pela URL da imagem
        fallback: '☕' // Emoji usado se a imagem não carregar
    },
    {
        id: 2,
        name: 'Caneca Personalizada Premium',
        description: 'Alta qualidade com acabamento impecável. Ideal para presentes únicos.',
        price: 'R$ 59,90',
        image: 'https://cdn.dooca.store/521/products/sdfgndsafg_640x640+fill_ffffff.jpg?v=1653333650&webp=0',
        fallback: '🎨'
    },
    {
        id: 3,
        name: 'Caneca Criativa Artesanal (Com Carinho)',
        description: 'Feita à mão com atenção aos detalhes. Cada peça é única e especial.',
        price: 'R$ 69,90',
        image: 'https://cdn.awsli.com.br/600x700/2517/2517292/produto/373719617/36264am-a0x6fm83gj.jpg',
        fallback: '✨'
    },
    {
        id: 4,
        name: 'Caneca Luxo Dourada',
        description: 'Acabamento dourado metálico que adiciona elegância ao seu dia a dia.',
        price: 'R$ 79,90',
        image: 'https://mimospersonalizadosstore.com.br/wp-content/uploads/2022/03/Caneca-Cromada-Dourada.jpg',
        fallback: '🌟'
    },
    {
        id: 5,
        name: 'Caneca Vintage Retrô',
        description: 'Estilo retrô com toque moderno. Perfeita para os amantes de design clássico.',
        price: 'R$ 54,90',
        image: 'https://cdn.awsli.com.br/600x700/952/952032/produto/40203422/esmaltada-fusca1-0s1buwu5cz.png',
        fallback: '📻'
    },
    {
        id: 6,
        name: 'Caneca Inspiracional',
        description: 'Mensagens motivacionais que acompanham seu café e inspiram seu dia.',
        price: 'R$ 49,90',
        image: 'https://acdn-us.mitiendanube.com/stores/001/399/404/products/1-25b86115664b0595c217053408565196-1024-1024.jpg',
        fallback: '💫'
    }
];

// Função para gerar link do WhatsApp
function generateWhatsAppLink(message) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

// Função para abrir WhatsApp
function openWhatsApp(message) {
    const url = generateWhatsAppLink(message);
    window.open(url, '_blank');
}

// Carrossel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    // Remove active de todos os slides e dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Adiciona active no slide e dot atual
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (dots[index]) {
        dots[index].classList.add('active');
    }
    
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Event listeners do carrossel
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
}

if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
}

// Dots do carrossel
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto-play do carrossel
let carouselInterval = setInterval(nextSlide, 5000);

// Pausar carrossel ao passar o mouse
const carouselContainer = document.querySelector('.carousel-container');
if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(nextSlide, 5000);
    });
}

// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

// Aplicar imagens de fundo nos slides do carrossel
function applyBannerImages() {
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach((slide, index) => {
        if (bannerImages[index]) {
            slide.style.backgroundImage = `url('${bannerImages[index]}')`;
        }
    });
}

// Renderizar produtos
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = products.map(product => {
        // Verifica se é uma URL de imagem ou emoji
        const isImageUrl = product.image && (product.image.startsWith('http') || product.image.startsWith('/') || product.image.includes('.'));
        const fallback = product.fallback || '☕';
        
        let imageContent = '';
        if (isImageUrl) {
            // Usa imagem de fundo para melhor controle visual
            imageContent = `<span style="display: none;" data-fallback="${fallback}">${fallback}</span>`;
        } else {
            // Usa emoji como fallback
            imageContent = `<span style="font-size: 5rem;">${product.image || fallback}</span>`;
        }
        
        return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image" ${isImageUrl ? `style="background-image: url('${product.image}');" data-image-url="${product.image}" data-fallback="${fallback}"` : ''}>
                ${imageContent}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <button class="product-btn" onclick="handleProductClick('${product.name}')">
                    💬 Comprar via WhatsApp
                </button>
            </div>
        </div>
        `;
    }).join('');
    
    // Adicionar tratamento de erro para imagens que não carregam
    const productImages = document.querySelectorAll('.product-image[data-image-url]');
    productImages.forEach(imgContainer => {
        const imgUrl = imgContainer.getAttribute('data-image-url');
        const fallback = imgContainer.getAttribute('data-fallback');
        
        // Criar uma imagem temporária para verificar se carrega
        const testImg = new Image();
        testImg.onerror = () => {
            // Se a imagem não carregar, mostrar o fallback
            imgContainer.style.backgroundImage = 'none';
            const fallbackSpan = imgContainer.querySelector('span[data-fallback]');
            if (fallbackSpan) {
                fallbackSpan.style.display = 'flex';
                fallbackSpan.style.fontSize = '5rem';
                fallbackSpan.style.alignItems = 'center';
                fallbackSpan.style.justifyContent = 'center';
                fallbackSpan.style.width = '100%';
                fallbackSpan.style.height = '100%';
            }
        };
        testImg.src = imgUrl;
    });
}

// Função para lidar com clique no produto
function handleProductClick(productName) {
    const message = `Olá! Gostaria de comprar a caneca ${productName}.`;
    openWhatsApp(message);
}

// Tornar função global para uso no onclick
window.handleProductClick = handleProductClick;

// Botão personalizar via WhatsApp
const customizeWhatsAppBtn = document.getElementById('customizeWhatsApp');
if (customizeWhatsAppBtn) {
    customizeWhatsAppBtn.addEventListener('click', () => {
        const message = 'Olá! Gostaria de criar uma caneca personalizada!';
        openWhatsApp(message);
    });
}

// Link WhatsApp no footer
const footerWhatsApp = document.getElementById('footerWhatsApp');
if (footerWhatsApp) {
    footerWhatsApp.addEventListener('click', (e) => {
        e.preventDefault();
        const message = 'Olá! Gostaria de mais informações sobre as canecas personalizadas.';
        openWhatsApp(message);
    });
}

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animação ao scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.product-card, .testimonial-card, .customize-text, .customize-image');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Header com sombra ao scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    applyBannerImages();
    renderProducts();
    showSlide(0);
    
    // Adicionar efeito de loading suave
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Prevenir comportamento padrão de formulários (se houver)
document.addEventListener('submit', (e) => {
    e.preventDefault();
});

// Adicionar efeito de hover nos cards de produto
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }, 500);
});

// Console log para debug (remover em produção)
console.log('☕ Caneca Criativa - Site carregado com sucesso!');
console.log('📱 Número do WhatsApp configurado:', WHATSAPP_NUMBER);


