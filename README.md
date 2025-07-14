# Next.js + Better Auth + PostgreSQL + TailwindCSS

[![CI](https://github.com/<ton-utilisateur>/next-better-auth-postgres/actions/workflows/ci.yml/badge.svg)](https://github.com/<ton-utilisateur>/next-better-auth-postgres/actions)
[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/<ton-utilisateur>/next-better-auth-postgres)

## Architecture du projet

```
projet/
├── .env
├── docker-compose.yml
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
├── tsconfig.json
├── public/
├── src/
│   └── app/
│       ├── components/
│       │   ├── AppHeader.tsx
│       │   ├── MovieList.tsx
│       │   ├── MovieListSuspense.tsx
│       │   ├── MovieSkeleton.tsx
│       │   └── user-header.tsx
│       ├── dashboard/
│       │   └── page.tsx
│       ├── signin/
│       │   └── page.tsx
│       ├── signup/
│       │   └── page.tsx
│       ├── layout.tsx
│       ├── page.tsx
│       └── api/
│           └── auth/
│               ├── [...auth]/route.ts
│               └── signout/route.ts
│   └── lib/
│       ├── auth.ts
│       └── auth-client.ts
```

## Technologies utilisées
- **Next.js** (App Router, SSR/SSG, API routes)
- **TypeScript** (typage strict)
- **TailwindCSS** (UI moderne, dark mode)
- **Better Auth** (authentification)
- **PostgreSQL** (base de données, via Docker)
- **react-loading-skeleton** (skeleton UI)

## Lancement du projet

### Prérequis
- Node.js >= 18
- pnpm (gestionnaire de paquets)
- Docker (pour la base PostgreSQL)

### 1. Installer les dépendances
```sh
pnpm install
```

### 2. Lancer la base de données
```sh
docker-compose up -d
```

### 3. Configurer les variables d'environnement
Copier `.env.example` en `.env` et adapter les valeurs si besoin.

### 4. Lancer le serveur de développement
```sh
pnpm dev
```

Le projet sera accessible sur [http://localhost:3000](http://localhost:3000)

---

**Pages principales** :
- `/` : Landing page
- `/signin` : Connexion
- `/signup` : Inscription
- `/dashboard` : Dashboard privé (infos utilisateur + films TMDB)

**Bonnes pratiques** :
- Code typé, composants fonctionnels, hooks React
- Séparation logique métier (lib/) et présentation (app/)
- Authentification sécurisée (Better Auth)
- UI moderne et responsive (TailwindCSS)

---

> Pour toute question, consulte la documentation dans `copilot-instructions.md` ou le code source.
