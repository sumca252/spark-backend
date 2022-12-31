/**
 * Type definitions for GraphQL schema
 */
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require("graphql");

const RoleType = new GraphQLObjectType({
    name: "Role",
    description: "This represents a Role of a User",
    fields: () => ({
        id: {
            description: "The id of the role",
            type: new GraphQLNonNull(GraphQLString),
        },
        role: {
            description: "The role of the user",
            type: new GraphQLNonNull(GraphQLString),
        },
    }),
});

const UserType = new GraphQLObjectType({
    name: "User",
    description: "This represents a User of the application",
    fields: () => ({
        id: {
            description: "The id of the user",
            type: new GraphQLNonNull(GraphQLString),
        },
        first_name: {
            description: "The first name of the user",
            type: new GraphQLNonNull(GraphQLString),
        },
        last_name: {
            description: "The last name of the user",
            type: new GraphQLNonNull(GraphQLString),
        },
        username: {
            description: "The username of the user",
            type: new GraphQLNonNull(GraphQLString),
        },
        password: {
            description: "The hashed password of the user",
            type: new GraphQLNonNull(GraphQLString),
        },
        email: {
            description: "The email of the user",
            type: new GraphQLNonNull(GraphQLString),
        },
        phone: {
            description: "The phone number of the user",
            type: new GraphQLNonNull(GraphQLString),
        },
        role: {
            description: "The role of the user",
            type: new GraphQLNonNull(GraphQLString),
        },
    }),
});

const CustomerType = new GraphQLObjectType({
    name: "Customer",
    description: "This represents a Customer",
    fields: () => ({
        id: {
            description: "The id of the customer",
            type: new GraphQLNonNull(GraphQLString),
        },
        user: {
            description: "Customer's user",
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
        id: {
            description: "The id of the account",
            type: new GraphQLNonNull(GraphQLString),
        },
        customer: {
            description: "Account's customer",
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
        balance: {
            description: "The balance of the account",
            type: new GraphQLNonNull(GraphQLString),
        },
        payment_method: {
            description: "The payment method of the account",
            type: new GraphQLNonNull(GraphQLString),
        },
    }),
});

const StatusType = new GraphQLObjectType({
    name: "Status",
    description: "This represents a Status",
    fields: () => ({
        id: {
            description: "The id of the status",
            type: new GraphQLNonNull(GraphQLString),
        },
        status: {
            description: "The status of the scooter",
            type: new GraphQLNonNull(GraphQLString),
        },
    }),
});

const PriceType = new GraphQLObjectType({
    name: "Price",
    description: "This represents a Price",
    fields: () => ({
        id: {
            description: "The id of the price",
            type: new GraphQLNonNull(GraphQLString),
        },
        start_cost: {
            description: "The start cost of the price",
            type: new GraphQLNonNull(GraphQLString),
        },
        travel_cost: {
            description: "The travel cost of the price",
            type: new GraphQLNonNull(GraphQLString),
        },
        parking_cost: {
            description: "The parking cost of the price",
            type: new GraphQLNonNull(GraphQLString),
        },
    }),
});

const ScooterType = new GraphQLObjectType({
    name: "Scooter",
    description: "This represents a Scooter",
    fields: () => ({
        id: {
            description: "The id of the scooter",
            type: new GraphQLNonNull(GraphQLString),
        },
        battery: {
            description: "The battery level of the scooter",
            type: new GraphQLNonNull(GraphQLString),
        },
        status: {
            description: "The status of the scooter",
            type: StatusType,
            resolve: (status) => {
                return {
                    id: status.id,
                    status: status.status,
                };
            },
        },
        longitude: {
            description: "The longitude of the scooter",
            type: new GraphQLNonNull(GraphQLString),
        },
        latitude: {
            description: "The latitude of the scooter",
            type: new GraphQLNonNull(GraphQLString),
        },
        price: {
            description: "The price for renting the scooter",
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
        speed: {
            description: "The speed of the scooter",
            type: new GraphQLNonNull(GraphQLString),
        },
        station: {
            description: "The station where the scooter is located",
            type: StationType,
            resolve: (station) => {
                return {
                    id: station.id,
                    station_name: station.station_name,
                    city_name: station.city_name,
                    zone_type: station.zone_type,
                    longitude: station.longitude,
                    latitude: station.latitude,
                };
            },
        },
    }),
});

const ZoneType = new GraphQLObjectType({
    name: "Zone",
    description: "This represents a Zone of a Station",
    fields: () => ({
        id: {
            description: "The id of the zone",
            type: new GraphQLNonNull(GraphQLString),
        },
        type: {
            description: "The type of the zone",
            type: new GraphQLNonNull(GraphQLString),
        },
    }),
});

const CityType = new GraphQLObjectType({
    name: "City",
    description: "This represents a City",
    fields: () => ({
        id: {
            description: "The id of the city",
            type: new GraphQLNonNull(GraphQLString),
        },
        name: {
            description: "The name of the city",
            type: new GraphQLNonNull(GraphQLString),
        },
        country: {
            description: "The country where the city is located",
            type: new GraphQLNonNull(GraphQLString),
        },
        longitude: {
            description: "The longitude of the city",
            type: new GraphQLNonNull(GraphQLString),
        },
        latitude: {
            description: "The latitude of the city",
            type: new GraphQLNonNull(GraphQLString),
        },
        area: {
            description: "The area of the city",
            type: new GraphQLNonNull(GraphQLString),
        },
    }),
});

const StationType = new GraphQLObjectType({
    name: "Station",
    description: "This represents a Station",
    fields: () => ({
        id: {
            description: "The id of the station",
            type: new GraphQLNonNull(GraphQLString),
        },
        station_name: {
            description: "The name of the station",
            type: new GraphQLNonNull(GraphQLString),
        },
        city_name: {
            description: "The city where the station is located",
            type: new GraphQLNonNull(GraphQLString),
        },
        zone_type: {
            description: "The zone of the station",
            type: new GraphQLNonNull(GraphQLString),
        },
        longitude: {
            description: "The longitude of the station",
            type: new GraphQLNonNull(GraphQLString),
        },
        latitude: {
            description: "The latitude of the station",
            type: new GraphQLNonNull(GraphQLString),
        },
    }),
});

const LogType = new GraphQLObjectType({
    name: "Logs",
    description: "This represents a Log of a User",
    fields: () => ({
        id: {
            description: "The id of the log",
            type: new GraphQLNonNull(GraphQLString),
        },
        start_time: {
            type: new GraphQLNonNull(GraphQLString),
        },
        end_time: {
            type: new GraphQLNonNull(GraphQLString),
        },
        start_longitude: {
            type: new GraphQLNonNull(GraphQLString),
        },
        end_longitude: {
            type: new GraphQLNonNull(GraphQLString),
        },
        start_latitude: {
            type: new GraphQLNonNull(GraphQLString),
        },
        end_latitude: {
            type: new GraphQLNonNull(GraphQLString),
        },
        customer_id: {
            type: new GraphQLNonNull(GraphQLString),
        },
        price_id: {
            type: new GraphQLNonNull(GraphQLString),
        },
        scooter_id: {
            type: new GraphQLNonNull(GraphQLString),
        },
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
    StationType,
    LogType,
};
