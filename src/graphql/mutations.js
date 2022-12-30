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

const {
    UserType,
    CityType,
    StationType,
    ZoneType,
    ScooterType,
    LogType,
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
        createUser: {
            type: UserType,
            description: "Add a new user to the database",
            args: {
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
                User.createUser(args);
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
            },
            resolve: (parent, args) => {
                Logs.createLog(args);
            },
        },
        updateLogByLogId: {
            type: LogType,
            description: "Update a log in the database by log id",
            args: {
                id: {
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
            },
            resolve: (parent, args) => {
                Logs.updateLogByScooterId(args);
            },
        },
    }),
});

module.exports = RootMutationType;
