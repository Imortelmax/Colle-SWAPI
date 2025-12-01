# Colle-SWAPI

Application React interactive pour explorer l'univers Star Wars via l'API SWAPI.

## 📋 Description

Cette application permet de consulter et rechercher des informations sur les personnages et vaisseaux de l'univers Star Wars. Elle utilise l'API publique [SWAPI.tech](https://swapi.tech/) pour récupérer les données en temps réel.

## ✨ Fonctionnalités

- 🔍 **Recherche de personnages** : Barre de recherche pour filtrer les personnages par nom
- 📖 **Liste complète** : Affichage de tous les personnages Star Wars
- 👤 **Détails des personnages** : Informations détaillées (couleur des yeux, année de naissance, genre, vaisseaux pilotés)
- 🚀 **Détails des vaisseaux** : Informations sur les vaisseaux (modèle, fabricant, pilotes)
- 🔗 **Navigation fluide** : Liens cliquables entre personnages et vaisseaux
- ⚡ **Interface réactive** : Navigation rapide avec React Router

## 🛠️ Technologies utilisées

- **React 19.1.0** - Framework JavaScript
- **React Router DOM** - Gestion de la navigation
- **Vite 6.3.5** - Outil de build et serveur de développement
- **ESLint** - Linter JavaScript
- **SWAPI.tech API** - Source des données Star Wars

## 📦 Installation

1. Cloner le dépôt :
```bash
git clone https://github.com/Imortelmax/Colle-SWAPI.git
cd Colle-SWAPI/swapi
```

2. Installer les dépendances :
```bash
npm install
```

3. Installer React Router (si nécessaire) :
```bash
npm install react-router-dom
```

## 🚀 Utilisation

### Mode développement

Lancer le serveur de développement :
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173/`

### Build de production

Créer une version optimisée pour la production :
```bash
npm run build
```

### Prévisualisation de la production

Prévisualiser la version de production :
```bash
npm run preview
```

### Linter

Vérifier la qualité du code :
```bash
npm run lint
```

## 📁 Structure du projet

```
Colle-SWAPI/
└── swapi/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── CharacterList.jsx      # Liste des personnages avec recherche
    │   │   ├── CharacterDetails.jsx   # Détails d'un personnage
    │   │   └── StarshipDetails.jsx    # Détails d'un vaisseau
    │   ├── App.jsx                     # Composant principal avec routes
    │   ├── App.css                     # Styles de l'application
    │   ├── main.jsx                    # Point d'entrée
    │   └── index.css                   # Styles globaux
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 🗺️ Routes de l'application

- `/` - Page d'accueil avec la liste des personnages
- `/characters/:id` - Page de détails d'un personnage
- `/starships/:id` - Page de détails d'un vaisseau

## 🔌 API utilisée

L'application utilise l'API publique **SWAPI.tech** :
- Endpoint personnages : `https://swapi.tech/api/people/`
- Endpoint vaisseaux : `https://swapi.tech/api/starships/`

Documentation complète : [https://www.swapi.tech/documentation](https://www.swapi.tech/documentation)

## 🌟 Caractéristiques techniques

- **Chargement paginé** : Récupération automatique de toutes les pages de l'API
- **Gestion des erreurs** : Messages d'erreur clairs en cas de problème
- **États de chargement** : Indicateurs visuels pendant le chargement des données
- **Navigation bidirectionnelle** : Liens entre personnages et vaisseaux dans les deux sens
- **Code moderne** : Utilisation des hooks React (useState, useEffect)

## 📝 Licence

Ce projet est un exercice éducatif.

## 👨‍💻 Auteur

Projet réalisé dans le cadre d'un exercice de développement web.

---

**May the Force be with you! 🌟**
