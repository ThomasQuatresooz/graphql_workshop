# Workshop GraphQL

A beginner workshop about graphql during my training at Becode.
![Graphql logo](https://cdn-images-1.medium.com/max/1600/1*0LaLCAqhV16zJWCfbtmxXQ.png)

## A little introduction

GraphQL is a new API standard that provides a more efficient, powerful and flexible alternative to REST. It was developed and open-sourced by Facebook

### Why Facebook developed it:

1. Increased mobile usage creates need for efficient data loading
1. Variety of different frontend frameworks and platforms
1. Fast development & expectation for rapid feature development

### And Rest ?

![Rest fetching](https://i.imgur.com/VRyV7Jh.png)

No more Over- and Underfetching

![GraphQL Fetching](https://i.imgur.com/z9VKnHs.png)

---

## Installation

We'll use `docker` and `docker-compose`, so go catch them before we start !

After that, pull the mariaDB image :

```bash
docker pull mariadb
```

And you'll have to install some dependencies so...

```bash
npm install
```

or

```bash
yarn install
```

Now we are good to go !

## Tech

My workshop uses a number of dependencies to work properly:

- [Express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node.
- [Express-graphql](https://www.npmjs.com/package/express-graphql) - Production ready GraphQL HTTP middleware.
- [GraphQL.js](https://www.npmjs.com/package/graphql) - The JavaScript reference implementation for GraphQL.
- [GraphQL-playground](https://www.npmjs.com/package/graphql-playground-middleware-express) - GraphQL IDE for better development workflow.
- [GraphQL-tools](https://www.npmjs.com/package/graphql-tools) - Useful tools to create and manipulate GraphQL schema.
- [MariaDB](https://www.npmjs.com/package/mariadb) - Non-blocking MariaDB and MySQL client for Node.js.
- [Sequelize](https://www.npmjs.com/package/sequelize) - Multi dialect ORM for node.
- [Nodemon](https://www.npmjs.com/package/nodemon) - Simple monitor script for use during development of a node app.

## VS Code Extension

- [Vscode-graphql](https://marketplace.visualstudio.com/items?itemName=luyizhi.vscode-graphql) - Code Formatter and code completion proposals for graphql

---
