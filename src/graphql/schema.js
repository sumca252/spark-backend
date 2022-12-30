/**
 * Schema definition
 */
const { GraphQLSchema } = require("graphql");

const QueryType = require("./queries");
const MutationType = require("./mutations");

const schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});

module.exports = schema;
