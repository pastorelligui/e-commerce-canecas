# 🚀 Deploy no Netlify - Caneca Criativa

## Branch to Deploy

Para este projeto estático, o **Branch to deploy** no Netlify será:

### ✅ **Branch Principal: `main` ou `master`**

- **Se você já tem um repositório Git:**
  - O branch padrão geralmente é `main` (repositórios mais novos)
  - Ou `master` (repositórios mais antigos)
  
- **Se você ainda não criou o repositório Git:**
  - O Netlify pode fazer deploy direto da pasta (drag and drop)
  - Ou você pode inicializar um repositório Git e fazer push

## 📋 Configuração no Netlify

### Opção 1: Deploy via Drag and Drop (Mais Simples)

1. Acesse [Netlify Drop](https://app.netlify.com/drop)
2. Arraste a pasta do projeto
3. Pronto! Não precisa configurar branch

### Opção 2: Deploy via Git (Recomendado para atualizações automáticas)

1. **Conectar repositório Git:**
   - Acesse [Netlify](https://app.netlify.com)
   - Clique em "Add new site" → "Import an existing project"
   - Conecte com GitHub, GitLab ou Bitbucket

2. **Configurações de Build:**
   ```
   Branch to deploy: main (ou master, dependendo do seu repositório)
   Build command: (deixe vazio - não precisa de build)
   Publish directory: / (raiz do projeto)
   ```

3. **Variáveis de Ambiente:**
   - Não são necessárias para este projeto

## ⚙️ Configurações Recomendadas no Netlify

### Build Settings:
- **Branch to deploy:** `main` (ou `master`)
- **Build command:** (deixe vazio)
- **Publish directory:** `/` ou `.` (raiz)

### Deploy Settings:
- **Auto-deploy:** Habilitado (para deploys automáticos)

## 📁 Estrutura do Projeto

Seu projeto está assim:
```
site/
├── index.html
├── styles.css
├── script.js
├── images/
│   ├── banner1.jpg
│   ├── banner2.jpg
│   ├── banner3.jpg
│   ├── caneca1.png
│   ├── caneca2.png
│   └── ...
└── README.md
```

## 🔧 Inicializar Git (Se ainda não tiver)

Se você quiser usar Git para fazer deploy automático:

```bash
# Inicializar repositório
git init

# Adicionar arquivos
git add .

# Fazer commit
git commit -m "Initial commit: Site Caneca Criativa"

# Criar repositório no GitHub/GitLab/Bitbucket
# Depois fazer push:
git remote add origin <URL_DO_SEU_REPOSITORIO>
git branch -M main
git push -u origin main
```

## ✅ Checklist para Deploy

- [ ] Adicionar todas as imagens na pasta `images/`
- [ ] Configurar número do WhatsApp em `script.js`
- [ ] Testar o site localmente
- [ ] Fazer deploy no Netlify
- [ ] Verificar se todas as imagens carregam corretamente
- [ ] Testar links do WhatsApp

## 🎯 Resumo

**Branch to deploy:** `main` (ou `master` se for o branch padrão do seu repositório)

**Importante:** Como este é um site estático sem processo de build, você também pode usar o Netlify Drop (drag and drop) sem precisar configurar branches!

