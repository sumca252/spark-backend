/**
 * Mutation Definitions
 */

const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require("graphql");

const User = require("../models/users.model");
const City = require("../models/cities.model");
const Station = require("../models/stations.model");
const Zone = require("../models/zones.model");
const Scooter = require("../models/scooters.model");
const Logs = require("../models/logs.model");
const Accounts = require("../models/accounts.model");

const {
    UserType,
    CityType,
    StationType,
    ZoneType,
    ScooterType,
    LogType,
    AccountType,
} = require("./types");

const RootMutationType = new GraphQLObjectType({
    name: "Mutation",
    description: "Root Mutation for the application",
    fields: () => ({
        addCity: {
            type: CityType,
            description: "Add a city to the database",
            args: {
                name: {
                    description: "Name of the city",
                    type: new GraphQLNonNull(GraphQLString),
                },
                country: {
                    description: "Country of the city",
                    type: new GraphQLNonNull(GraphQLString),
                },
                longitude: {
                    description: "Longitude of the city",
                    type: new GraphQLNonNull(GraphQLString),
                },
                latitude: {
                    description: "Latitude of the city",
                    type: new GraphQLNonNull(GraphQLString),
                },
                area: {
                    description: "Area of the city",
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: (parent, args) => {
                City.addCity(args);
            },
        },
        updateCityById: {
            type: CityType,
            description: "Update a city in the database by id",
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                name: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                country: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                longitude: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                latitude: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: (parent, args) => {
                City.updateCityById(args);
            },
        },
        addStation: {
            type: StationType,
            description: "Add a station to the database",
            args: {
                name: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                zone_id: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                longitude: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                latitude: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                city_id: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: (parent, args) => {
                Station.addStation(args);
            },
        },
        updateStationById: {
            type: StationType,
            description: "Update a station in the database by id",
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                name: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                zone_id: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                longitude: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                latitude: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                city_id: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: (parent, args) => {
                Station.updateStationById(args);
            },
        },
        addZone: {
            type: ZoneType,
            description: "Add a zone to the database",
            args: {
                type: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: (parent, args) => {
                Zone.addZone(args);
            },
        },
        updateZoneById: {
            type: ZoneType,
            description: "Update a zone in the database by id",
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                type: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: (parent, args) => {
                Zone.updateZoneById(args);
            },
        },
        addScooter: {
            type: ScooterType,
            description: "Add a scooter to the database",
            args: {
                battery: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                status_id: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                longitude: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                latitude: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                price_id: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                speed: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                station_id: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: (parent, args) => {
                Scooter.addScooter(args);
            },
        },
        updateScooterById: {
            type: ScooterType,
            description: "Update a scooter in the database by id",
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                battery: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                status_id: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                longitude: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                latitude: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                price_id: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                speed: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                station_id: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: (parent, args) => {
                Scooter.updateScooterById(args);
            },
        },
        deleteScooterById: {
            type: ScooterType,
            description: "Delete a scooter in the database by id",
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: (parent, args) => {
                Scooter.deleteScooterById(args.id);
            },
        },
        rentScooter: {
            type: ScooterType,
            description: "Rent a scooter in the database",
            args: {
                id: {
                    description: "Id of the scooter",
                    type: new GraphQLNonNull(GraphQLString),
                },
                user_id: {
                    description: "Id of the user",
                    type: new GraphQLNonNull(GraphQLString),
                },
                longitude: {
                    description: "Longitude of the scooter",
                    type: new GraphQLNonNull(GraphQLString),
                },
                latitude: {
                    description: "Latitude of the scooter",
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: async (parent, args) => {
                const result = await Scooter.rentScooter(
                    args.id,
                    args.user_id,
                    args.longitude,
                    args.latitude
                );

                return result;
            },
        },
        returnScooter: {
            type: ScooterType,
            description: "Return a scooter in the database",
            args: {
                id: {
                    description: "Id of the scooter",
                    type: new GraphQLNonNull(GraphQLString),
                },
                user_id: {
                    description: "Id of the user",
                    type: new GraphQLNonNull(GraphQLString),
                },
                longitude: {
                    description: "Longitude of the scooter",
                    type: new GraphQLNonNull(GraphQLString),
                },
                latitude: {
                    description: "Latitude of the scooter",
                    type: new GraphQLNonNull(GraphQLString),
                },
                distance: {
                    description:
                        "travelled distance for calculating total price",
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: async (parent, args) => {
                await Scooter.returnScooter(
                    args.id,
                    args.user_id,
                    args.longitude,
                    args.latitude,
                    args.distance
                );
            },
        },
        createUser: {
            type: UserType,
            description: "Add a new user to the database",
            args: {
                first_name: {
                    description: "First name of the user",
                    type: new GraphQLNonNull(GraphQLString),
                },
                last_name: {
                    description: "Last name of the user",
                    type: new GraphQLNonNull(GraphQLString),
                },
                username: {
                    description: "Username of the user",
                    type: new GraphQLNonNull(GraphQLString),
                },
                password: {
                    description: "Password of the user",
                    type: new GraphQLNonNull(GraphQLString),
                },
                email: {
                    description: "Email of the user",
                    type: new GraphQLNonNull(GraphQLString),
                },
                phone: {
                    description: "Phone number of the user",
                    type: new GraphQLNonNull(GraphQLString),
                },
                role_id: {
                    description: "Role of the user (1 = admin, 2 = customer)",
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: async (parent, args) => {
                const user = await User.createUser(args);

                return user;
            },
        },
        updateUserById: {
            type: UserType,
            description: "Update a user in the database by id",
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                first_name: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                last_name: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                password: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                email: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                phone: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                role_id: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: (parent, args) => {
                User.updateUserById(args);
            },
        },
        createLog: {
            type: LogType,
            description: "Add a new log to the database",
            args: {
                start_longitude: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                start_latitude: {
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
            },
            resolve: async (parent, args) => {
                const log = await Logs.createLog(args);

                return log;
            },
        },
        updateLogByLogId: {
            type: LogType,
            description: "Update a log in the database by log id",
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                end_time: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                end_longitude: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                end_latitude: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: (parent, args) => {
                Logs.updateLogByLogId(args);
            },
        },
        updatePaymentMethodByCustomerId: {
            type: AccountType,
            description:
                "Change the payment method of an account by customer id",
            args: {
                customer_id: {
                    description: "The id of the customer",
                    type: new GraphQLNonNull(GraphQLString),
                },
                payment_method: {
                    description: "The type of payment method to change to",
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: (parent, args) => {
                Accounts.changePaymentMethod(args);
            },
        },
        AddMoneyToAccountByCustomerId: {
            type: AccountType,
            description: "Add money to an account by customer id",
            args: {
                customer_id: {
                    description: "The id of the customer",
                    type: new GraphQLNonNull(GraphQLString),
                },
                balance: {
                    description: "The amount of money to add to the account",
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: (parent, args) => {
                Accounts.AddMoneyToAccount(args);
            },
        },
    }),
});

module.exports = RootMutationType;
