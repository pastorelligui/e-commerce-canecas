# ☕ Caneca Criativa - Site de E-commerce

Site completo de e-commerce de canecas personalizadas com design premium, moderno e totalmente responsivo.

## 🚀 Características

- ✅ Design premium e elegante (tons neutros com detalhes dourados)
- ✅ Totalmente responsivo (mobile, tablet e desktop)
- ✅ Carrossel de banners com auto-play
- ✅ Catálogo de produtos com integração WhatsApp
- ✅ Seção de personalização de canecas
- ✅ Depoimentos de clientes
- ✅ Animações sutis e transições suaves
- ✅ SEO básico configurado
- ✅ Performance otimizada

## 📋 Pré-requisitos

Nenhum! O site é estático e funciona diretamente no navegador.

## 🛠️ Instalação

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` no navegador
3. Ou use um servidor local (recomendado para desenvolvimento):

```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

## ⚙️ Configuração

### Configurar número do WhatsApp

1. Abra o arquivo `script.js`
2. Localize a linha:
```javascript
const WHATSAPP_NUMBER = '5511999999999';
```
3. Substitua `5511999999999` pelo seu número do WhatsApp
   - Formato: código do país + DDD + número (sem espaços ou caracteres especiais)
   - Exemplo: `5511999999999` (Brasil: 55 + DDD 11 + número 999999999)

### Personalizar Produtos

Edite o array `products` no arquivo `script.js`:

```javascript
const products = [
    {
        id: 1,
        name: 'Nome do Produto',
        description: 'Descrição do produto',
        price: 'R$ 49,90',
        image: 'images/caneca1.jpg', // URL da imagem
        fallback: '☕' // Emoji usado se a imagem não carregar
    },
    // Adicione mais produtos...
];
```

### Adicionar Imagens

#### Imagens dos Banners

1. Adicione as imagens dos banners na pasta `images/`:
   - `banner1.jpg` - Primeiro slide
   - `banner2.jpg` - Segundo slide
   - `banner3.jpg` - Terceiro slide

2. Ou edite o array `bannerImages` em `script.js`:
```javascript
const bannerImages = [
    'images/banner1.jpg',
    'images/banner2.jpg',
    'images/banner3.jpg'
];
```

**Recomendações:**
- Dimensões: 1920x600px
- Formato: JPG ou PNG
- Tamanho: Máximo 500KB

#### Imagens dos Produtos

1. Adicione as imagens das canecas na pasta `images/`:
   - `caneca1.jpg`, `caneca2.jpg`, etc.

2. Os produtos já estão configurados para usar essas imagens em `script.js`

**Recomendações:**
- Dimensões: 800x800px (quadrado) ou 800x600px
- Formato: JPG ou PNG
- Tamanho: Máximo 300KB
- Fundo: Preferencialmente branco ou neutro

#### Usando URLs Externas

Você também pode usar URLs de imagens hospedadas online:

```javascript
image: 'https://exemplo.com/caneca1.jpg'
```

**Dica:** Consulte `images/README.md` para mais detalhes sobre onde encontrar imagens gratuitas e como otimizá-las.

## 📱 Funcionalidades

### Integração WhatsApp

- **Botão "Comprar via WhatsApp"**: Abre conversa com mensagem pré-formatada incluindo o nome do produto
- **Botão "Personalizar via WhatsApp"**: Abre conversa para solicitar personalização
- **Link WhatsApp no Footer**: Abre conversa para informações gerais

### Carrossel de Banners

- Auto-play a cada 5 segundos
- Navegação por setas e dots
- Pausa ao passar o mouse

### Menu Responsivo

- Menu hambúrguer em dispositivos móveis
- Navegação suave entre seções
- Menu fixo no topo ao fazer scroll

## 🎨 Personalização

### Cores

As cores podem ser personalizadas no arquivo `styles.css` através das variáveis CSS:

```css
:root {
    --color-primary: #D4AF37; /* Dourado principal */
    --color-primary-dark: #B8941F;
    --color-primary-light: #E8D5A3;
    --color-neutral-dark: #1a1a1a;
    /* ... */
}
```

### Fontes

O site usa Google Fonts:
- **Playfair Display**: Títulos e elementos destacados
- **Inter**: Texto geral

Para alterar, edite o link no `<head>` do `index.html`.

## 📦 Deploy

### Firebase Hosting

1. Instale o Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Faça login:
```bash
firebase login
```

3. Inicialize o projeto:
```bash
firebase init hosting
```

4. Configure:
   - Public directory: `.` (ponto)
   - Single-page app: `No`
   - GitHub automatic deploys: `No` (ou `Yes` se preferir)

5. Faça o deploy:
```bash
firebase deploy
```

### Outras opções de deploy

- **Netlify**: Arraste a pasta do projeto para o Netlify Drop
- **Vercel**: Conecte seu repositório Git
- **GitHub Pages**: Ative nas configurações do repositório
- **Servidor próprio**: Faça upload dos arquivos via FTP

## 🔧 Estrutura de Arquivos

```
site/
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript e funcionalidades
└── README.md           # Este arquivo
```

## 📝 Licença

Este projeto é de código aberto e está disponível para uso pessoal e comercial.

## 🤝 Contribuições

Sinta-se à vontade para fazer fork, melhorar e personalizar conforme suas necessidades!

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através do WhatsApp configurado no site.

---

Desenvolvido com ❤️ para amantes de café e criatividade ☕✨

