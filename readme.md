# Teishi
Teishi est une api codé en typescript avec le runtime deno, pour une api "moderne", elle propose des hentai, l'api est actuellement indisponible mais sera ouvert dans peu de temps

## Construit avec

* [Deno](https://www.deno.land) - runtime
* [TypeScript](https://www.typescriptlang.org/) - language

## Exemple d'utilisation (avec nodejs)
```js
const axios = require('axios');
axios({
  method: 'get',
  url: 'http://51.75.190.143:2457/api/v1/yuri',
})
  .then(function (response) {
    console.log(response.data.url)
  });
```
yuri peut etre renplacé par un autre Endpoint

## Endpoint disponible
- pussy
- boobs
- yuri

### Installation
```
git clone https://github.com/Scrickers/Teishi.git
cd Teishi
```
puis ajouté des images dans les dossiers img
### Lancement
``` 
deno run --allow-read --allow-net index.ts
```
## License

Ce projet est sous la licence MIT - voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails.