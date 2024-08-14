# Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

    ```bash
    git clone https://github.com/Ousmanly/abc-survey-app.git
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd survey-app
    ```

3. **Installez les dépendances :**

    ```bash
    npm install
    ```

4. **Configurez la base de données :**

    - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
    - Mettez les paramètres de connexion dans `config/database.js`.

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```
## Les modules et les fonctionnement des opérations CRUD

1. **createurModule :**

 - Fonction : async createCreateur(createur)
    Cette fonction ajoute un nouveau créateur à la collection createurs. Avant de créer un nouveau créateur, elle vérifie si un créateur avec le même ID existe déjà dans la base de données.

 - Fonction : async getCreateur()
    Cette fonction récupère tous les créateurs présents dans la collection createurs de la base de données.

 - Fonction : async updateCreateur(id, update)
    Cette fonction met à jour les informations d'un créateur existant dans la collection createurs en se basant suur ID entrer.

 - Fonction : async deleteCreateur(id)
    Cette fonction supprime un créateur de la collection createurs par son ID.

2. **enqueteModule :**
 
 - Fonction : async createEnquete(enquete)
    Cette fonction ajoute une nouvelle enquête à la collection enquetes. Avant de créer une nouvelle enquête, elle vérifie si une enquête avec le même ID existe déjà dans la base de données.
 
 - Fonction : async getEnquete()
    Cette fonction récupère toutes les enquêtes présentes dans la collection enquetes de la base de données. Elle renvoie la liste complète des enquêtes.
 
 - Fonction : async updateEnquete(id, update)
    Cette fonction met à jour les informations d'une enquête existante dans la collection enquetes en se basant suur ID entrer.
 - Fonction : async deleteEnquete(id)
    Cette fonction supprime une enquête de la collection enquetes par son ID.

3. **questionModule :**

 - Fonction : async createReponse(reponse)
    Cette fonction ajoute une nouvelle réponse à la collection reponses. Avant de créer une nouvelle réponse, elle vérifie si une réponse avec le même ID existe déjà dans la base de données.
 
 - Fonction : async getReponse()
    Cette fonction récupère toutes les réponses présentes dans la collection reponses de la base de données. Elle renvoie la liste complète des réponses.
 
 - Fonction : async updateReponse(id, update)
    Cette fonction met à jour les informations d'une réponse existante dans la collection reponses en se basant suur ID entrer.

 - Fonction : async deleteReponse(id)
    Cette fonction supprime une réponse de la collection reponses par son ID.

3. **questionModule :**
 - Fonction : async createQuestion(question)
    Cette fonction ajoute une nouvelle question à la collection question. Avant de créer une nouvelle question, elle vérifie si une question avec le même ID existe déjà dans la base de données.

 - Fonction : async getQuestion()
    Cette fonction récupère toutes les questions présentes dans la collection questions de la base de données. Elle renvoie la liste complète des questions.

 - Fonction : async updateQuestion(id, update)
    Cette fonction met à jour les informations d'une question existante dans la collection questions en se basant suur ID entrer.

 - Fonction : async deleteQuestion(id)
    Cette fonction supprime une question de la collection questions par son ID.

## Authors
 - Nom : Ousmane Ibrahima Ly
 - GitHub : https://github.com/Ousmanly