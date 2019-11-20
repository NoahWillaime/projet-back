# Adopt'un pet [partie Back]

Projet développé avec [Nest](https://github.com/nestjs/nest).

Front-end : https://github.com/NoahWillaime/projet-front

## Avant de commencer

Ce projet nécessite l'installation de :
 - [NodeJS](https://nodejs.org/en/).
 - [MongoDB](https://www.mongodb.com/fr)
 - [Robot3T](https://robomongo.org/download) (Optionnel mais recommandé) 

## Mise en place
```bash
$ git clone https://github.com/NoahWillaime/projet-back
```

-   Se connecter à MongoDB (Mongo Shell ou via Robot3T)
-   Créer une nouvelle base de donnée "projetdb" (Vous pouvez changer le nom dans le fichier /config/default.yml)
-   Utiliser le script `init.mongodb.js` présent dans le dossier /scripts pour générer les collections ainsi que des données exemples.
-   Puis exécuter les commandes suivantes :
```bash
$ yarn global add @nestjs/cli
$ cd /projet-back
$ yarn install
```

## Lancement du serveur

```bash
$ yarn run start
```

Ou lancer directement le serveur si vous utilisez WebStorm (ou Intellij Ultimate).

## License

  Nest is [MIT licensed](LICENSE).
