# 🛠️ Copilot Instructions: Next.js + TypeScript + TailwindCSS

## Structure du projet
- Utilise l'App Router (`src/app/`)
- Pages principales : `/`, `/signin`, `/signup`, `/dashboard`
- Authentification via Better Auth (API routes dans `src/app/api/auth/`)
- Composants réutilisables dans `src/app/`
- Fichiers de configuration : `.env`, `tailwind.config.js`, `tsconfig.json`, `next.config.ts`

## Technologies
- **Next.js** (App Router, SSR/SSG, API routes)
- **TypeScript** (typage strict, interfaces, types)
- **TailwindCSS** (classes utilitaires pour le style)
- **Better Auth** (authentification)
- **PostgreSQL** (base de données)

## Standards de codage
- Utiliser TypeScript partout (pas de `any` sauf exception justifiée)
- Préférer les composants fonctionnels et hooks React
- Respecter la convention de nommage camelCase pour les variables/fonctions, PascalCase pour les composants
- Utiliser les classes Tailwind pour le style, pas de CSS inline sauf cas exceptionnel
- Garder le code lisible, commenté si logique complexe
- Séparer la logique métier (lib/) de la présentation (app/)

## Bonnes pratiques Next.js
- Utiliser les layouts pour les éléments globaux (header, footer)
- Protéger les pages privées côté serveur (ex: dashboard)
- Préférer les imports absolus (`@/lib/...`)
- Utiliser les API routes pour la logique serveur (auth, data)
- Préférer `use client` uniquement si nécessaire

## Développement & Debugging
- Toujours vérifier les erreurs TypeScript et ESLint avant de commit
- Utiliser les messages d’erreur Next.js pour guider le debug
- Pour le style, utiliser la documentation officielle Tailwind
- Pour l’auth, suivre la doc Better Auth et vérifier les routes API
- Utiliser les outils de dev React/Next.js pour inspecter le DOM et le state
- Tester les endpoints API avec un outil comme Thunder Client ou Postman

## Instructions spécifiques pour Copilot
- Proposer des solutions idiomatiques Next.js/TypeScript/Tailwind
- Toujours suggérer le typage explicite
- Ne jamais générer de code avec `any` sauf si explicitement demandé
- Pour les composants, toujours proposer la version fonctionnelle
- Pour l’auth, utiliser les helpers Better Auth déjà présents
- Pour les pages, respecter la structure App Router
- Toujours expliquer brièvement les choix techniques dans la réponse
- Toujours utiliser pnpm pour la gestion des paquets
- Ne pas proposer de code obsolète ou supprimélet session = null;

---

> Utilise ces instructions pour toute suggestion, correction ou génération de code dans ce projet.
