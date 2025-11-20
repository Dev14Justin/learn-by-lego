![Learn By Lego](https://img.shields.io/badge/Learn_By_Lego-Apprendre_par_blocs-blue?style=for-the-badge&logo=lego)

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

![Last Commit](https://img.shields.io/github/last-commit/Dev14Justin/learn-by-lego?style=for-the-badge)
![Open Issues](https://img.shields.io/github/issues/Dev14Justin/learn-by-lego?style=for-the-badge)
![Open PRs](https://img.shields.io/github/issues-pr/Dev14Justin/learn-by-lego?style=for-the-badge)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen?style=for-the-badge)

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-blue?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-pink?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open%20Source-Yes-brightgreen?style=for-the-badge)


# Learn By Lego
Apprendre le développement **bloc par bloc**, comme un château de LEGO.

---

## À propos

**Learn By Lego** est une plateforme open source qui permet d’apprendre l’informatique, le web et le mobile à travers des **blocs d’apprentissage** :
de petites unités pédagogiques simples, inspirées du principe des LEGO.

Chaque bloc est :
- *simple*
- *progressif*
- *orienté fonctionnalité réelle*

Les utilisateurs peuvent :
- apprendre une fonctionnalité précise en quelques minutes,
- explorer des blocs créés par la communauté,
- contribuer en ajoutant **une astuce**, **une vidéo YouTube**, ou **une fonctionnalité**.

Ce projet est porté par la **DevShare Community**, une communauté qui encourage le partage, l’entraide et la progression collective.

---

## Fonctionnalités

- **Blocs d’apprentissage** : chaque vidéo ou astuce devient une “brique” pour apprendre.
- **Progression modulaire** : assembler les blocs pour monter en compétence.
- **Ajout rapide de contenu** : contribuer simplement en ajoutant un lien YouTube.
- **Participation open source** : amélioration du code et de nouvelles fonctionnalités.
- **Communauté active** : discussions, retours, conseils.
- **Interface moderne et animée** avec Tailwind + Framer Motion.

---

## Technologies utilisées

- **Next.js 15** — Framework moderne et performant
- **TypeScript** — Typage fiable et sûr
- **Tailwind CSS** — Design rapide et propre
- **Framer Motion** — Animations fluides
- **JSON** — Stockage simple des blocs pour contribution
- **GitHub** — Plateforme principale de contribution

---

## Installation et démarrage

### Prérequis
- Node.js **18+**
- npm, yarn, pnpm ou bun

### Étapes

1. **Cloner le repository**

```bash
git clone https://github.com/Dev14Justin/learn-by-lego.git
cd learn-by-lego
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer le serveur**

```bash
npm run dev
```

4. **Accéder à l'application**

Ouvrez votre navigateur et allez à :
```
http://localhost:3000
```

## Comment contribuer

Toutes les contributions sont les bienvenues :
- ajout d’un bloc LEGO (astuce, vidéo, fonctionnalité),
- amélioration du code,
- documentation,
- nouvelle fonctionnalité.

### 1. Fork & Clone

```bash
git clone https://github.com/Dev14Justin/learn-by-lego.git
```

### 2. Crée une branche

```bash
git checkout -b feature/nouveau-bloc
```

### 3. Ajoute ton bloc dans `data/lego.json`

Lien direct :
https://github.com/Dev14Justin/learn-by-lego/blob/main/data/lego.json

Structure d’un bloc :

```json
{
  "id": 1,
  "titre": "Titre du bloc",
  "description": "Description simple du bloc.",
  "link": "https://youtube.com/lien-de-la-video",
  "category": "Développement Web",
  "author": "Ton nom ou pseudo",
  "date_added": "YYYY-MM-DD"
}
```

### 4. Envoie ta contribution

```bash
git commit -m "Ajout: [Titre du Bloc]"
git push origin feature/nouveau-bloc
```

Puis crée une Pull Request.

## Structure du projet

```
learn-by-lego/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── blocs/             # Pages de blocs
├── components/
│   ├── Navbar.tsx
│   ├── LegoCard.tsx
│   └── CategoryFilter.tsx
├── data/
│   └── lego.json          # Fichier des blocs d’apprentissage
├── public/
│   ├── logo.svg
│   └── images/
├── README.md
└── LICENSE
```

## Objectifs communautaires

- Rendre l’apprentissage simple et accessible
- Encourager le partage et la contribution
- Créer la plus grande bibliothèque de blocs pédagogiques open source
- Aider les débutants à apprendre à leur rythme, sans stress

## Licence

Ce projet est sous licence MIT.
Consultez le fichier LICENSE pour plus de détails.

## Auteur

Justin MONDJI — Créateur & Mainteneur principal
GitHub : https://github.com/Dev14Justin

## Remerciements

La DevShare Community

Les contributeurs open source

Tous ceux qui croient en l’apprentissage simple, modulaire et collaboratif

Fait avec par @Justin MONDJI — LEARN BY LEGO