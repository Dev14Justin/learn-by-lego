Guide de contribution – Learn By Lego

Bienvenue, et merci pour votre intérêt à contribuer à Learn By Lego !
Ce projet open source vise à rendre l’apprentissage du développement simple, modulaire et accessible, grâce à un système de blocs d’apprentissage.

Ce guide vous explique étape par étape comment participer efficacement.

## Pré-requis

Avant de contribuer, assurez-vous d’avoir :

- Un compte GitHub
- Forké le dépôt ou cloné votre propre branche
- Node.js installé
- Consulté la documentation du projet (`README.md`)
- Compris la structure des données dans `data/lego.json`

## Convention de branches

Vous êtes libre de nommer vos branches comme vous le souhaitez.
Cependant, pour garder un historique clair, nous recommandons ces conventions :

| Type de contribution    | Préfixe recommandé             |
| :---------------------- | :----------------------------- |
| Nouvelle fonctionnalité | `feature/nom-de-la-fonctionnalité` |
| Ajout d’un bloc Lego    | `block/nom-du-bloc`            |
| Correction de bug       | `fix/nom-du-bug`               |
| Documentation           | `docs/nom-du-document`         |
| Refactorisation         | `refactor/nom-du-module`       |

Exemples :

- `feature/system-filtrage`
- `block/nextjs-router-tuto`
- `docs/contributing`
- `fix/erreur-affichage-cartes`

Ces conventions sont recommandées, mais non obligatoires.

## Étapes pour contribuer

### 1. Créez une branche dédiée

À partir de `main` :

```bash
git checkout -b feature/ma-contribution
```

### 2. Effectuez vos modifications

Ajoutez votre code, bloc ou documentation.

### 3. Testez localement

Assurez-vous que tout fonctionne :

```bash
npm run dev
```

### 4. Soumettez une Pull Request

Depuis votre fork vers `main` du repo officiel :

https://github.com/Dev14Justin/learn-by-lego

Indiquez dans la description :

- Ce que vous avez ajouté
- Pourquoi
- Comment tester

### 5. Attendez la revue d’un mainteneur

Un membre du projet examinera votre PR.

## Ajouter un bloc Learn By Lego

Pour ajouter un bloc d’apprentissage :

1. Ouvrez le fichier : `data/lego.json`

   Lien direct :
   https://github.com/Dev14Justin/learn-by-lego/blob/main/data/lego.json

2. Ajoutez un bloc avec ce format :
   ```json
   {
     "id": 1,
     "titre": "Titre du bloc",
     "description": "Description simple et claire du bloc.",
     "link": "https://youtube.com/lien-de-la-video",
     "category": "Développement Web",
     "author": "Votre nom ou pseudo",
     "date_added": "YYYY-MM-DD"
   }
   ```

3. Commitez :
   ```bash
   git commit -m "Ajout: [Titre du Bloc]"
   ```

4. Poussez votre branche :
   ```bash
   git push origin feature/ajout-bloc
   ```

## Protection des tags Git – tags-protection-learn-by-lego

Learn By Lego utilise un ruleset GitHub pour sécuriser les balises de version (tags) et garantir la stabilité du projet.

### Pourquoi protéger les tags ?

- Les versions (`v1.0.0`, `v2.0.1`, etc.) doivent être fiables.
- Les règles empêchent les erreurs et les modifications non intentionnelles.

### Règles appliquées

| Règle                      | Description                                                  |
| :------------------------- | :----------------------------------------------------------- |
| Création restreinte        | Seuls les mainteneurs ou bots CI peuvent créer des tags      |
| Mise à jour restreinte     | Les tags existants ne peuvent pas être modifiés              |
| Suppression restreinte     | Les tags ne peuvent pas être supprimés                      |
| Historique linéaire requis | Rebase recommandé, pas de merges désordonés                 |
| Commits signés requis      | Authentification des contributeurs                           |
| CI/CD obligatoire          | Build, lint et tests doivent réussir                         |
| Push forcé interdit       | `git push --force` est bloqué sur les tags                 |

### Motif ciblé

`refs/tags/v*`

Exemples concernés :
`v1.0.0`, `v1.1.2`, `v2.0.0-rc1`, etc.

## Besoin d’aide ?

Vous pouvez :

- Ouvrir une issue GitHub
- Demander conseil dans votre Pull Request
- Contacter un mainteneur
  → @Justin MONDJI

---

## Merci !

Merci de contribuer à Learn By Lego
Ensemble, nous construisons la première plateforme d’apprentissage modulaire, simple, ouverte, basée sur la philosophie “apprendre par blocs”.