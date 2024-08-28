# MoodArt

## Description
MoodArt est un générateur d'art interactif alimenté par *Ahmed-Reda Saadani* . Ce projet permet aux utilisateurs de saisir leur humeur sous forme de texte, puis utilise des technologies d'IA pour analyser cette humeur et créer une œuvre d'art unique en fonction de l'émotion détectée. L'application vise à offrir une expérience personnalisée et créative basée sur les sentiments des utilisateurs.

## Fonctionnalités

- **Saisie d'humeur :** Les utilisateurs peuvent entrer leur humeur sous forme de texte dans une interface conviviale.
- **Analyse de l'humeur :** Utilisation d'une API d'analyse des sentiments pour évaluer le texte et identifier l'émotion dominante.
- **Génération d'œuvres d'art :** En fonction de l'émotion détectée, une IA générative crée une œuvre d'art personnalisée pour refléter cette humeur.
- **Téléchargement et partage :** Les utilisateurs ont la possibilité de télécharger ou de partager leur œuvre d'art générée via les réseaux sociaux ou d'autres plateformes.

## Technologies Utilisées

- **Frontend :**
  - **HTML/CSS :** Pour la structure et le style de la page web.
  - **JavaScript :** Pour l'interaction dynamique avec l'utilisateur et la gestion des appels aux APIs.

- **Backend :**
  - **API d'analyse des sentiments :** Pour comprendre l'humeur de l'utilisateur. Par exemple, vous pouvez utiliser des services comme [IBM Watson](https://www.ibm.com/cloud/watson-natural-language-understanding) ou [Google Cloud Natural Language](https://cloud.google.com/natural-language).
  - **API générative d'images :** Pour créer l'œuvre d'art basée sur l'émotion. Des services comme [DALL-E](https://openai.com/dall-e) ou [DeepArt](https://deepart.io) peuvent être utilisés.

## Instructions

### Configuration Locale

1. **Cloner le Dépôt :**
   - Clonez le dépôt GitHub sur votre machine locale :
     ```bash
     git clone https://github.com/redaksjsj/MoodArt.git
     ```

2. **Naviguer dans le Répertoire :**
   - Accédez au répertoire du projet :
     ```bash
     cd MoodArt
     ```

3. **Fichiers Nécessaires :**
   - Assurez-vous que les fichiers `index.html`, `style.css`, `script.js`, et `README.md` sont présents dans le répertoire du projet.

### Utilisation

1. **Ouvrir `index.html` :**
   - Ouvrez le fichier `index.html` dans un navigateur web pour accéder à l'application MoodArt.

2. **Saisie de l'Humeur :**
   - Entrez votre humeur dans la zone de texte prévue à cet effet.

3. **Génération de l'Art :**
   - Cliquez sur le bouton pour générer l'œuvre d'art basée sur votre humeur. L'art généré apparaîtra dans la section prévue à cet effet.

4. **Téléchargement et Partage :**
   - Vous pouvez télécharger ou partager l'œuvre d'art en utilisant les options disponibles.

### Développement et Contribution

1. **Branches :**
   - Créez une nouvelle branche pour chaque fonctionnalité ou correction :
     ```bash
     git checkout -b nom-de-la-branche
     ```

2. **Faire des Modifications :**
   - Effectuez vos modifications dans le code source ou les fichiers.

3. **Commit et Push :**
   - Ajoutez les changements et faites un commit avec un message descriptif :
     ```bash
     git add .
     git commit -m "Description des changements"
     git push origin nom-de-la-branche
     ```

4. **Créer une Pull Request :**
   - Ouvrez une pull request sur GitHub pour proposer vos changements.

### Dépendances et API

- **API d'Analyse des Sentiments :** Configurez les clés API nécessaires et ajoutez-les dans le code JavaScript ou dans des variables d'environnement.
- **API Générative d'Images :** Configurez également les clés API pour générer les images basées sur les émotions.

## Licence

Ce projet est sous la licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus de détails.
