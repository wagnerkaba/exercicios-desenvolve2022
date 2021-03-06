# Blog criado com REACT

![Imagem do blog](./petshop-preview.jpg)

* O blog está dividido em duas categorias: "bem-estar" e "comportamento". 
* Ao clicar nas categorias, surgem as subcategorias.
* Ao clicar nos posts, surge o texto completo do post.


## Tópicos importantes
* [React Router DOM](https://www.npmjs.com/package/react-router-dom)
* [Single Page Application](./notas-de-aula/aula%2002.04%20-%20single%20page%20application.md)
* [Links in React](./notas-de-aula/aula%2003.05%20-%20Links%20in%20React.md)
* [useParams] - In our React app sometimes we want to access the parameters of the current route in this case useParams hook comes into action. The react-router-dom package has useParams hooks that let you access the parameters of the current route.
* [useEffect](./notas-de-aula/useEffect.md)
* [useHistory do react router dom](./notas-de-aula/aula%2004.4%20-%20useHistory.md)

## Tecnologias utilizadas
* Javascript
* React
* [json-server](https://www.npmjs.com/package/json-server) Para criar um servidor de api fake e alimentar os dados do blog
* [Axios](https://www.npmjs.com/package/axios) - Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quando no Node.js. Vide [api.js](./petshop/src/api/api.js)


## Setup
Para instalar os arquivos do node. Entre na pasta `petshop` e digite:
```
npm install
```

Para iniciar o aplicativo. Entre na pasta `petshop` e digite:
```
npm start
```
Para iniciar o json server (que alimenta os dados do blog). Entre na pasta `petshop` e digite:
```
json-server --watch db.json --port 5000
```
