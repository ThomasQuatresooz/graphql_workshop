const path = require('path');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const schemasArray = loadFilesSync(path.join(__dirname, './**/*.gql')); //load schema files
const typeDefs = mergeTypeDefs(schemasArray, { all: true }); //merge all types

const resolversArray = loadFilesSync(path.join(__dirname, './**/*.resolver.*')); // load resolver files
const resolvers = mergeResolvers(resolversArray); //merge all resolvers

const schema = makeExecutableSchema({ typeDefs, resolvers }); // merge all in one big file

module.exports = schema;
