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

1. **employeModule :**

 - Fonction : async createEmploye({id(number), nomEmploye(String), roleEmploye:(String) })
    Cette fonction ajoute un nouveau employé à la collection employes. Avant de créer un nouveau employé, elle vérifie si un employé avec le même ID existe déjà dans la bas de données.

 - Fonction : async getEmploye()
    Cette fonction récupère tous les employés présents dans la collection employes de la base de données.

 - Fonction : async updateEmploye(id, {nomEmploye(String), roleEmploye:(String) })
    Cette fonction met à jour les informations d'un employé existant dans la collection employes en se basant suur ID entrer..

 - Fonction : async deleteEmploye(id(Number))
    Cette fonction supprime un employé de la collection employs par son ID entrer.

2. **fichierModule :**
 
 - Fonction : async createFichier({id:(Number), name:(String), description(String), date(String), employeId(Number), questionIds(Array), reponseIds(Array) })
    Cette fonction ajoute une nouvelle fichier à la collection fichiers. Avant de créer un nouveau fichier, elle vérifie si une fichier avec le même ID existe déjà dans la base de données.
 
 - Fonction : async getFichier()
    Cette fonction récupère toutes les fichiers présentes dans la collection fichiers de la base de données. Elle renvoie la liste complète des fichiers.
 
 - Fonction : async updateFichier(id, {name(String), description(String), date(String), createurId(Number), questionIds(Array), reponseIds(Array)  })
    Cette fonction met à jour les informations d'un fichier existant dans la collection fichiers en se basant sur ID entrer.

 - Fonction : async deleteFichier(id(Number))
    Cette fonction supprime un fichier de la collection fichiers par son ID.

3. **reponseModule :**

 - Fonction : async createReponse({id(Number), questionId(Number), titre(String)})
    Cette fonction ajoute une nouvelle réponse à la collection reponses. Avant de créer une nouvelle réponse, elle vérifie si une réponse avec le même ID existe déjà dans la base de données.
 
 - Fonction : async getReponse()
    Cette fonction récupère toutes les réponses présentes dans la collection reponses de la base de données. Elle renvoie la liste complète des réponses.
 
 - Fonction : async updateReponse(id, {questionId(Number), titre(String)})
    Cette fonction met à jour les informations d'une réponse existante dans la collection reponses en se basant suur ID entrer.

 - Fonction : async deleteReponse(id(Number))
    Cette fonction supprime une réponse de la collection reponses par son ID.

3. **questionModule :**
 - Fonction : async createQuestion({id(Number), fichierId(Number), titre(String), type(String), options(Array)})
    Cette fonction ajoute une nouvelle question à la collection question. Avant de créer une nouvelle question, elle vérifie si une question avec le même ID existe déjà dans la base de données.

 - Fonction : async getQuestion()
    Cette fonction récupère toutes les questions présentes dans la collection questions de la base de données. Elle renvoie la liste complète des questions.

 - Fonction : async updateQuestion(id, {fichierId(Number), titre(String), type(String), options(Array)})
    Cette fonction met à jour les informations d'une question existante dans la collection questions en se basant suur ID entrer.

 - Fonction : async deleteQuestion(id(Number))
    Cette fonction supprime une question de la collection questions par son ID.

## Authors
 - Nom : Ousmane Ibrahima Ly
 - GitHub : https://github.com/Ousmanly