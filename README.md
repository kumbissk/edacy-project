# Gespro

Ce projet est une application web fullstack permettant la gestion de produits avec authentification utilisateur (admin & employé). Elle a été développée avec Laravel (API REST + Sanctum) pour le backend et React.js + Tailwind CSS pour le frontend. La base de données utilisée est MySQL avec PHPmyAdmin.


## Fonctionnalités principales

- Authentification avec Laravel Sanctum (inscription, connexion, déconnexion)
- Gestion des rôles : administrateur et employé
- Gestion complète des produits (CRUD) :

  - Création de produit
  - Liste des produits
  - Modification de produit
  - Suppression de produit
  - Filtrage des produits selon l'utilisateur connecté (admin voit tout, employé voit ses produits uniquement)


## Installation

### Cloner le projet

```bash
git clone https://github.com/kumbissk/edacy-project.git
```


### Backend (Laravel)

```bash
cd gesprod
composer install
cp .env.example .env
php artisan key:generate
```

Configurer la base de données dans .env :

```bash
DB_DATABASE=nom_de_la_bdd
DB_USERNAME=root
DB_PASSWORD=
```

Puis exécuter les migrations :

```bash
php artisan migrate
php artisan serve
```

### Frontend (React)

Ouvrir le dossier _gespro-front_ ensuite :

```bash
npm install
npm run dev
```

## Authentification et rôles

- Admin : Peut accéder à tous les produits, les modifier, les supprimer ou en ajouter.
- Employé : Peut uniquement gérer ses propres produits.

## Notes supplémentaires

- Les appels API utilisent Axios avec gestion du token CSRF (via /sanctum/csrf-cookie).
- Les requêtes sont faites avec withCredentials: true pour permettre l’envoi de cookies sécurisés.

## Auteur

**[kumbissk](https://github.com/kumbissk)**
