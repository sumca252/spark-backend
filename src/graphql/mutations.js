/**
 * Mutation Definitions
 */

const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require("graphql");

const User = require("../models/users.model");

const { UserType } = require("./types");

const RootMutationType = new GraphQLObjectType({
    name: "Mutation",
    description: "Root Mutation for the application",
    fields: () => ({
        createUser: {
            type: UserType,
            description: "Add a user to the database",
            args: {
                first_name: { type: new GraphQLNonNull(GraphQLString) },
                last_name: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLString) },
                role_id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                await User.createUser(args);
            },
        },
        updateUserById: {
            type: UserType,
            description: "Update a user in the database",
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                first_name: { type: new GraphQLNonNull(GraphQLString) },
                last_name: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLString) },
                role_id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const updatedUser = await User.updateUserById(args);

                if (!updatedUser) {
                    throw new Error("Error updating user");
                }

                return updatedUser;
            },
        },
    }),
});

module.exports = RootMutationType;
