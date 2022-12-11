/**
 * Type definitions for GraphQL schema
 */
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require("graphql");

const RoleType = new GraphQLObjectType({
    name: "Role",
    description: "This represents a Role of a User",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        role: { type: new GraphQLNonNull(GraphQLString) },
    }),
});

const UserType = new GraphQLObjectType({
    name: "User",
    description: "This represents a User of the application",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        first_name: { type: new GraphQLNonNull(GraphQLString) },
        last_name: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
        role: { type: new GraphQLNonNull(GraphQLString) },
    }),
});

const CustomerType = new GraphQLObjectType({
    name: "Customer",
    description: "This represents a Customer",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        user: {
            type: UserType,
            resolve: (user) => {
                return {
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    phone: user.phone,
                    role: user.role,
                };
            },
        },
    }),
});

const AccountType = new GraphQLObjectType({
    name: "Account",
    description: "This represents an Account",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        customer: {
            type: CustomerType,
            resolve: (customer) => {
                return {
                    id: customer.id,
                    customer_id: customer.customer_id,
                    user_id: customer.user_id,
                    first_name: customer.first_name,
                    last_name: customer.last_name,
                };
            },
        },
        balance: { type: new GraphQLNonNull(GraphQLString) },
        payment_method: { type: new GraphQLNonNull(GraphQLString) },
    }),
});

const StatusType = new GraphQLObjectType({
    name: "Status",
    description: "This represents a Status",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        status: { type: new GraphQLNonNull(GraphQLString) },
    }),
});

const PriceType = new GraphQLObjectType({
    name: "Price",
    description: "This represents a Price",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        start_cost: { type: new GraphQLNonNull(GraphQLString) },
        travel_cost: { type: new GraphQLNonNull(GraphQLString) },
        parking_cost: { type: new GraphQLNonNull(GraphQLString) },
    }),
});

const ScooterType = new GraphQLObjectType({
    name: "Scooter",
    description: "This represents a Scooter",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        battery: { type: new GraphQLNonNull(GraphQLString) },
        status: {
            type: StatusType,
            resolve: (status) => {
                return {
                    id: status.id,
                    status: status.status,
                };
            },
        },
        longitude: { type: new GraphQLNonNull(GraphQLString) },
        latitude: { type: new GraphQLNonNull(GraphQLString) },
        price: {
            type: PriceType,
            resolve: (price) => {
                return {
                    id: price.id,
                    start_cost: price.start_cost,
                    travel_cost: price.travel_cost,
                    parking_cost: price.parking_cost,
                };
            },
        },
    }),
});

const ZoneType = new GraphQLObjectType({
    name: "Zone",
    description: "This represents a Zone of a Station",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: new GraphQLNonNull(GraphQLString) },
    }),
});

const CityType = new GraphQLObjectType({
    name: "City",
    description: "This represents a City",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        country: { type: new GraphQLNonNull(GraphQLString) },
        longitude: { type: new GraphQLNonNull(GraphQLString) },
        latitude: { type: new GraphQLNonNull(GraphQLString) },
    }),
});

module.exports = {
    RoleType,
    UserType,
    CustomerType,
    AccountType,
    StatusType,
    PriceType,
    ScooterType,
    ZoneType,
    CityType,
};
