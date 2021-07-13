# Shellbox Planning Poker

## 💻 Motivo

O **Planning Poker** é uma estratégia muito aplicada em projetos que utilizam metodologias ágeis, especialmente o Scrum, cujo objetivo é estimar o esforço necessário para o desenvolvimento das funcionalidades de uma aplicação. 
Tendo em vista que a maioria dos serviços de Planning Poker são pagos este projeto tem como objetivo disponibilizar um aplicativo customizado de forma simples, prática e rápida para cada empresa e/ou time.

Este projeto não tem a intenção de ficar pronto um dia, ou seja, ele será eternamente aberto a novas contribuições e melhorias.

## Features
- Possibilidade de Multi Salas (on demand)
- Possibilidade de esconder/mostrar votos
- Possibilidade de alterar história vigente
- Sistema localizado
- Sem nescessidade de banco de dados
- Eventos em tempo real
- Possíbilidade de deploy com Docker
- Local Storage em Codificado

## Idiomas
- Português
- Espanhol
- Inglês

## Termos de Uso
O **ShellBox Planning Poker** é uma iniciativa feita pelos desenvolvedores do time de tecnologia do **Shellbox** na **Raízen**. Este projeto **não tem nenhuma ligação com a marca Shell** e seus correlacionados. 
Este projeto tem em sua natureza intenção de ajudar outros desenvolvedores a estimar de melhor forma o esforço necessário para o desenvolvimento das funcionalidades de uma aplicação.

Ao clonar este repositórios, por favor substitua os valores nos arquivos localizados na seção <a href="#inicializar">Inicializar</a>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- 💚 [Node.js](https://nodejs.org/en/)
- ⚛️  [React](https://reactjs.org/)
- 🎫 [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- ⌨️[Typescript](https://www.typescriptlang.org/)
- 🛎️ [Socket IO](https://socket.io/)
- 🐋[Docker (Optional)](https://www.docker.com/)

## Inicializar

Para instalar e utilizar a aplicação dentro da sua empresa e/ou time, basta clonar este repositório e rodar o comando abaixo dentro das pastas **API** e **APP**

    yarn install
ou

    npm install

Logo após o projeto estará pronto para uso, porém, não se esqueça de customizar de acordo com a sua empresa. 

Para isso basta alterar os arquivos abaixo. 

- 📁**API** 
	- 🗄️ [API - appConfig.json](https://github.com/Barros42/SB-Planning-Poker/blob/6e7d64659214102ce045a17a2fcf2b7e9cf2600d/api/appConfig.json)
- 📂 **APP**
	- 🗄️ [APP - appConfig.json](https://github.com/Barros42/SB-Planning-Poker/blob/559eebf411ebaa55bb7ff1fc5eb04af7780e31d6/app/src/appConfig.json)
	- 🗄️ [APP - logo.svg](https://github.com/Barros42/SB-Planning-Poker/blob/67f3de56947ea739ac40cb33b84187410b174111/app/src/assets/images/logo.svg)
	- 🗄️ [APP - variables.css](https://github.com/Barros42/SB-Planning-Poker/blob/67f3de56947ea739ac40cb33b84187410b174111/app/src/Styles/variables.css)

## 🤔  Como contribuir

-   Faça um fork desse repositório;
-   Crie uma branch com a sua feature:  `git checkout -b minha-feature`;
-   Faça commit das suas alterações:  `git commit -m 'feat: Minha nova feature'`;
-   Faça push para a sua branch:  `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## Autores

<table>
<thead>
<tr>
<th align="center"><a href="https://github.com/barros42"><img src="https://avatars.githubusercontent.com/u/34094891?v=4" width="115" style="max-width:100%;"><br><sub>@Barros42</sub></a></th>
</tr>
</thead>
</table>
