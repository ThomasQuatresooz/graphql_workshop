const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const playground = require('graphql-playground-middleware-express').default; //Graphql IDE

const { buildSchema } = require('graphql');

const schema = buildSchema(`
 
`);

const root = {};

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.get('/playground', playground({ endpoint: '/graphql' }));

app.listen(4000, () =>
  console.log('Running a GraphQL API server at http://localhost:4000/playground'),
);
