/**
 * Query Definitions
 */

// GraphQL
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
} = require("graphql");

// Types
const {
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
} = require("./types");

// Models
const Roles = require("../models/roles.model");
const Users = require("../models/users.model");
const Customers = require("../models/customers.model");
const Accounts = require("../models/accounts.model");
const Statuses = require("../models/statuses.model");
const Prices = require("../models/prices.model");
const Scooters = require("../models/scooters.model");
const Zones = require("../models/zones.model");
const Cities = require("../models/cities.model");
const Stations = require("../models/stations.model");
const Logs = require("../models/logs.model");

// Root Query
const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "Root Query for the application",
    fields: () => ({
        getAllRoles: {
            type: new GraphQLList(RoleType),
            description: "List of all Roles",
            resolve: async () => {
                const roles = await Roles.getAllRoles();

                return roles;
            },
        },
        getRoleById: {
            type: new GraphQLList(RoleType),
            description: "A single Role by id",
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const role = await Roles.getRoleById(parseInt(args.id));

                return role;
            },
        },
        getAllUsers: {
            type: new GraphQLList(UserType),
            description: "List of all Users",
            resolve: async () => {
                const users = await Users.getAllUsers();

                return users;
            },
        },
        getUserById: {
            type: new GraphQLList(UserType),
            description: "A single User by id",
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const user = await Users.getUserById(parseInt(args.id));

                return user;
            },
        },
        getUserByEmail: {
            type: new GraphQLList(UserType),
            description: "A single User by email",
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const user = await Users.getUserByEmail(args.email);

                return user;
            },
        },
        getUserByUsernameOrEmail: {
            type: new GraphQLList(UserType),
            description: "A single User by username",
            args: {
                username: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const user = args.username ? args.username : args.email;
                const result = await Users.getUserByUsernameOrEmail(user);

                return result;
            },
        },
        getAllCustomers: {
            type: new GraphQLList(CustomerType),
            description: "List of all Customers",
            resolve: async () => {
                const customers = await Customers.getAllCustomers();

                return customers;
            },
        },
        getCustomerById: {
            type: new GraphQLList(CustomerType),
            description: "A single Customer by id",
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const customer = await Customers.getCustomerById(
                    parseInt(args.id)
                );

                return customer;
            },
        },
        getAllAccounts: {
            type: new GraphQLList(AccountType),
            description: "List of all Accounts",
            resolve: async () => {
                const accounts = await Accounts.getAllAccounts();

                return accounts;
            },
        },
        getAccountByCustomerId: {
            type: new GraphQLList(AccountType),
            description: "A single Account by customer id",
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const account = await Accounts.getAccountByCustomerId(
                    parseInt(args.id)
                );

                return account;
            },
        },
        getAllStatuses: {
            type: new GraphQLList(StatusType),
            description: "List of all Statuses",
            resolve: async () => {
                const statuses = await Statuses.getAllStatuses();

                return statuses;
            },
        },
        getStatusById: {
            type: new GraphQLList(StatusType),
            description: "A single Status by id",
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const status = await Statuses.getStatusById(parseInt(args.id));

                return status;
            },
        },
        getAllPrices: {
            type: new GraphQLList(PriceType),
            description: "List of all Prices",
            resolve: async () => {
                const prices = await Prices.getAllPrices();

                return prices;
            },
        },
        getPriceById: {
            type: new GraphQLList(PriceType),
            description: "A single Price by id",
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const price = await Prices.getPriceById(parseInt(args.id));

                return price;
            },
        },
        getAllScooters: {
            type: new GraphQLList(ScooterType),
            description: "List of all Scooters",
            resolve: async () => {
                const scooters = await Scooters.getAllScooters();

                return scooters;
            },
        },
        getAllScooterInCityByCityId: {
            type: new GraphQLList(ScooterType),
            description: "List of all Scooters in a city by city id",
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const scooters = await Scooters.getAllScooterInCityByCityId(
                    args.id
                );

                return scooters;
            },
        },
        getAllScooterInStationByStationId: {
            type: new GraphQLList(ScooterType),
            description: "List of all Scooters in a station by station id",
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const scooters =
                    await Scooters.getAllScooterInStationByStationId(args.id);

                return scooters;
            },
        },
        getScooterById: {
            type: new GraphQLList(ScooterType),
            description: "A single Scooter by id",
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const scooter = await Scooters.getScooterById(
                    parseInt(args.id)
                );

                return scooter;
            },
        },
        getAllZones: {
            type: new GraphQLList(ZoneType),
            description: "List of all Zones",
            resolve: async () => {
                const zones = await Zones.getAllZones();

                return zones;
            },
        },
        getZoneById: {
            type: new GraphQLList(ZoneType),
            description: "A single Zone by id",
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const zone = await Zones.getZoneById(parseInt(args.id));

                return zone;
            },
        },
        getAllCities: {
            type: new GraphQLList(CityType),
            description: "List of all Cities",
            resolve: async () => {
                const cities = await Cities.getAllCities();

                return cities;
            },
        },
        getCityById: {
            type: new GraphQLList(CityType),
            description: "A single City by id",
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const city = await Cities.getCityById(parseInt(args.id));

                return city;
            },
        },
        getCityByScooterId: {
            type: new GraphQLList(CityType),
            description: "A single City by scooter id",
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const city = await Cities.getCityByScooterId(parseInt(args.id));

                return city;
            },
        },
        getAllStations: {
            type: new GraphQLList(StationType),
            description: "List of all Stations",
            resolve: async () => {
                const stations = await Stations.getAllStations();

                return stations;
            },
        },
        getStationById: {
            type: new GraphQLList(StationType),
            description: "A single Station by id",
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const station = await Stations.getStationById(
                    parseInt(args.id)
                );

                return station;
            },
        },
        getStationByZoneType: {
            type: new GraphQLList(StationType),
            description: "Stations by zone type",
            args: {
                zone_type: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const station = await Stations.getStationByZoneType(
                    args.zone_type
                );

                return station;
            },
        },
        getStationByCityIdAndZoneId: {
            type: new GraphQLList(StationType),
            description: "A single Station by city id and zone id",
            args: {
                cityId: { type: new GraphQLNonNull(GraphQLString) },
                zoneId: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const station = await Stations.getStationByCityIdAndZoneId(
                    parseInt(args.cityId),
                    parseInt(args.zoneId)
                );

                return station;
            },
        },
        getAllLogs: {
            type: new GraphQLList(LogType),
            description: "List of all Logs",
            resolve: async () => {
                const logs = await Logs.getAllLogs();

                return logs;
            },
        },
        getLogById: {
            type: new GraphQLList(LogType),
            description: "A single Log by id",
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const log = await Logs.getLogById(parseInt(args.id));

                console.log(log);
                return log;
            },
        },
        getLogByCustomerId: {
            type: new GraphQLList(LogType),
            description: "A single Log by customer id",
            args: {
                customerId: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const log = await Logs.getLogByCustomerId(args.customerId);

                return log;
            },
        },
    }),
});

module.exports = RootQueryType;
