# Aluga+

Plataforma web para anunciar e encontrar **imóveis**, **serviços de logística** e **espaços para eventos** em Moçambique, com interface inspirada no Airbnb.

---

## 1. Stack principal

- **Framework**: Next.js 16 (App Router)
- **Linguagem**: React 18 + TypeScript
- **Estilos**: Tailwind CSS 4
- **UI**: Radix UI, componentes próprios em `components/ui`, ícones Lucide

---

## 2. Estrutura base

- `app/page.tsx` – ponto de entrada da home (renderiza `App.tsx`)
- `App.tsx` – layout principal, lógica de categorias, filtros e wishlist
- `constants.tsx` – dados de exemplo (`LISTINGS`) já organizados por domínio:
  - `imoveis`
  - `logistica`
  - `eventos`
- `types.ts` – tipos de domínio (`Listing`, `Category`, `Filters`, etc.)
- `components/` – componentes de UI:
  - `Navbar.tsx` – barra superior com pesquisa
  - `CategoryBar.tsx` – tabs principais: Imóveis / Logística / Eventos
  - `FilterModal.tsx` – filtros por categoria (tipo, finalidade, preço, localização)
  - `ListingCard.tsx`, `ListingModal.tsx` – cards e detalhe dos anúncios
  - `components/mobile/BottomNavbar.tsx` e `UserProfile.tsx` – experiência adaptada para mobile
  - `components/product/*` – galeria de imagens, mapa, favoritos, etc.
- `services/geminiService.ts` – stub utilitário simples para interpretar texto de pesquisa em filtros (sem dependência externa real).

---

## 3. Funcionalidades atuais

- **Categorias principais fixas**: Imóveis, Logística, Eventos
- **Filtros por categoria**:
  - Imóveis: finalidade (aluguer/venda), tipo (casa, apartamento, quarto, etc.), faixa de preço, localização
  - Logística: tipo de serviço (camiões, carga, mudanças), preço opcional, localização
  - Eventos: tipo de espaço (salões, quintas, workshops), preço, localização
- **Pesquisa simples** pela barra superior:
  - Usa um parser de texto para tentar extrair alguns filtros (preço, localização, categoria)
- **Wishlist** (favoritos) persistida em `localStorage`
- **Layout responsivo**: grid adaptativa e navegação própria para mobile (bottom navbar)

---

## 4. Como correr o projeto

Na raiz do projeto (`Aluga+`):

### 4.1. Instalar dependências

```bash
npm install
```

### 4.2. Ambiente de desenvolvimento

```bash
npm run dev
```

O Next arrancará por defeito em `http://localhost:3000`.

### 4.3. Lint

```bash
npm run lint
```

---

## 5. Notas de configuração

- O ficheiro `next.config.mjs` está minimalista e preparado para o App Router.
- A chave `GEMINI_API_KEY` em `.env.local` está como **placeholder** – substitui pelo teu valor real se integrares algum serviço externo. Como boa prática, o `.env.local` é ignorado no `.gitignore`.

---

## 6. Próximos passos sugeridos

- Ligar a pesquisa e filtros a uma API real ou base de dados.
- Definir um fluxo de autenticação/conta de utilizador.
- Configurar um alvo de deploy (ex.: Vercel) e adicionar instruções de deploy aqui se necessário.

