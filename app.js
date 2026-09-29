// Variables qui contient les informations des paramètres 
const http = require('http');
const url = require('url');
const server = http.createServer(function(req, res) {
    
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const name = parsedUrl.query.name;
    const age = parsedUrl.query.age;
    const apiKey = req.headers['x-api-key'];
//--------------------------------------------------------------------------------//  


    // Permet de retrouver dans la console les informations des paramètres 
    console.log("Page demandée : " + pathname);
    console.log("Nom reçu : " + name);
    console.log("Âge reçu : " + age);
    console.log("Header x-api-key reçu : " + apiKey);

//-------------Condition qui permet de vérifier si les paramètres sont correcte----------------------

    // Condition de vérification pour la clé API (API-KEY)
    if (!apiKey || apiKey !== 'mon-secret-bts') {
        res.writeHead(401, { "Content-Type": "text/plain; charset=utf-8" });
        return res.end("Accès non autorisé : Header 'x-api-key' manquant ou invalide.");
        
    }

   // Condition de vérification pour le paramètre obligatoire dans l'url 'etape1' 
    if (pathname !== '/etape1') {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        return res.end("Page non trouvée pathname incorrect ou manquant.");

        
    }

    // Condition de vérification pour le paramètre obligatoire de l'âge et le nom des paramètres 
    if (name === 'anto' && age === '19') {
        //Permet de renvoyer sur l'écran 
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Bienvenue " + name + ", vous avez " + age + " ans sur le site officiel du BTS SIO SLAM");
    }
    
    else {
        res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Accès refusé : nom ou âge invalide ou manquant.");
    }
    //-------------FIN DES CONDITIONS----------------------

});

server.listen(8085);



