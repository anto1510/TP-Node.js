# TP 01 - NodeJS - Votre premier serveur Node JS

## Description
Ce projet contient le code d'un serveur HTTP basique en Node.js, réalisé dans le cadre du TP 01. Il inclut la gestion du routage (URLs), l'analyse des paramètres de requête (query params) et une vérification de sécurité par en-tête HTTP (API Key).

## Lancement du serveur
Pour lancer le serveur avec rechargement automatique en cas de modification :
```bash
node --watch app.js
```
Le serveur écoutera sur le port 8085.

---

## Réponses aux questions du TP

### Mission 1 : Créer un serveur web

**Quelle commande vous permet d'afficher les ports utilisés sur votre machine (serveur) ?**
Les commandes `netstat -tuln`, `ss -tuln` ou `lsof -i -P -n` permettent d'afficher les ports utilisés localement.

**Quelle commande vous permet d'afficher les ports ouverts sur une machine distante ?**
La commande `nmap <adresse-ip>` permet de scanner les ports ouverts sur une machine distante.

**Rendez vous à l'adresse: http://172.16.XXX.254:8085. Que remarquez vous ?**
La page s'affiche avec le texte brut renvoyé par le serveur (initialement "Hello BTS SIO SLAM!").

**Sauriez-vous identifier le contenu qui s'affiche dans la page web dans les sources du serveur app.js ?**
Oui, il s'agit du texte défini dans la méthode `res.end(...)`.

**Rechargez la page web ! Le contenu est mis à jour. Pourquoi ?**
Le contenu est mis à jour sans avoir à redémarrer manuellement le serveur car nous avons lancé l'application avec l'option `--watch` (ou `node-watch`), qui écoute les modifications du fichier et redémarre le processus automatiquement.

**A quoi correspond le numéro 200 dans le code ?**
Il s'agit du code de statut HTTP signifiant "OK", qui indique au navigateur que la requête a été traitée avec succès.

**Ouvrez le panneau de développeur sur votre navigateur. Allez dans l'onglet Network. Rechargez la page. Que voyez vous ?**
On y voit la requête HTTP GET effectuée vers le serveur, avec le statut 200, ainsi que les en-têtes de la réponse, notamment `Content-Type: text/plain` tel que défini dans le code.

### Mission 2 : Gestion des urls avec le module url

**Sauvegardez le changement puis rechargez la page web, que remarquez vous ?**
Dans le terminal de commande (où tourne le serveur), on remarque l'affichage de la route demandée (par exemple `Page: /`) grâce à l'instruction `console.log`.

**Ajoutez un chemin dans l'url (e.g. /test) ; que remarquez vous ?**
Le terminal affiche le nouveau chemin demandé (`Page: /test`), mais le navigateur affiche toujours le même contenu car la réponse n'est pas encore conditionnée par l'URL.

**Connaissez vous d'autres méthodes d'affichage dans la console que console.log() ?**
Oui : `console.error()` pour les erreurs, `console.warn()` pour les avertissements, `console.info()` pour les informations, ou encore `console.table()` pour afficher des données sous forme de tableau.

### Mission 3 : Gestion des query params

**Rechargez la page en passant le paramètre name dans l'url. Que remarquez-vous ?**
Le serveur récupère la valeur du paramètre et l'affiche dynamiquement sur la page. 
Dans l'implémentation actuelle, il faut fournir les paramètres `name=anto` et `age=19` dans l'URL pour passer la condition finale.

### Mission 4 : Limiter l'accès à certaines URLs

Le serveur a été configuré pour n'accepter que la route `/etape1`. Toute autre route renvoie une erreur 404.

| URL | Status Code | Explication |
|---|---|---|
| `/etape1` | 200 (si conditions de requêtes remplies) | URL existante et autorisée |
| Toute autre URL | 404 | Page non trouvée, pathname incorrect ou manquant |

### Mission 5 : Limiter l'accès en fonction d'un Header présent dans la requête

**Définissez un header spécifique que vous exigez, ainsi que sa valeur.**
- Header exigé : `x-api-key`
- Valeur attendue : `mon-secret-bts`
- Réponse si manquant ou incorrect : Status code 401 (Accès non autorisé).

### Mission 6 : Utiliser les différents types d'authentification d'API

Le tableau suivant détaille les endpoints de l'application selon les règles d'authentification mises en place dans le code actuel (API Key) et l'adaptation du tableau final du TP.

| Endpoints (Actuels / A implémenter) | Type d'authentification |
|---|---|
| `/etape1` (Route actuelle) | API Key (Header `x-api-key`) |
| `/basic-auth` (A créer) | Basic Authentication |
| `/api-key` (A créer) | API Key |
| `/bearer-token` (A créer) | Bearer Token (JWT) |
