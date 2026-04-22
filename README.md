# Canela Café Empório — Website

Site institucional do **Canela Café Empório e Cafeteria** em Ribeirão Preto.

## 🚀 Deploy (GitHub Pages)

### Opção 1: Deploy manual
```bash
npm run build
# Upload a pasta /dist para o GitHub Pages
```

### Opção 2: GitHub Actions (automático)
1. Crie o repositório no GitHub
2. Push o código
3. O workflow `.github/workflows/deploy.yml` faz o deploy automático

### Configuração do GitHub Pages
1. Vá em **Settings → Pages**
2. Em **Source**, selecione **GitHub Actions**
3. O site estará em: `https://<usuario>.github.io/<nome-repo>/`

> **Importante**: Se o repositório NÃO for `<usuario>.github.io`, atualize o `base` em `vite.config.ts`:
> ```ts
> base: '/<nome-repo>/'
> ```

## 🛠️ Desenvolvimento

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # Build de produção
npm run preview # Preview do build
```

## 📁 Estrutura

```
src/
├── components/
│   ├── Navbar.tsx      # Navegação sticky
│   ├── Hero.tsx        # Seção principal
│   ├── About.tsx       # Sobre a cafeteria
│   ├── Menu.tsx        # Cardápio com filtros
│   ├── Gallery.tsx     # Galeria horizontal
│   ├── Store.tsx       # Loja/Marketplace (preview)
│   ├── B2B.tsx         # Área empresas
│   ├── Contact.tsx     # Contato + mapa
│   ├── Footer.tsx      # Rodapé
│   └── WhatsAppFloat.tsx # Botão flutuante
├── hooks/
│   └── useScrollReveal.ts # Animações on-scroll
├── assets/images/      # Fotos da cafeteria
├── index.css           # Design system completo
├── App.tsx             # Composição principal
└── main.tsx            # Entry point
```

## 🎨 Stack

- **Vite** + **React** + **TypeScript**
- **CSS Puro** (sem Tailwind, sem libs de UI)
- **Google Fonts**: Playfair Display + DM Sans
- **Deploy**: GitHub Pages (estático)
