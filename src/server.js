/**
 * Spark Backend Server
 */
"use strict";

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const port = process.env.PORT || 1337;
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

const { graphqlHTTP } = require("express-graphql");

const schema = require("./graphql/schema");

const app = express();

const httpServer = require("http").createServer(app);

const io = require("socket.io")(httpServer, {
    cors: {
        origin: [
            "*",
            process.env.FRONTEND_URL,
            process.env.WEBADMIN_URL,
            process.env.APP_URL,
        ],
        methods: ["GET", "POST"],
    },
});

const scooters = require("./models/scooters.model.js");

io.on("connection", (socket) => {
    setInterval(async () => {
        const data = await scooters.getAllScooters();

        socket.emit("simulation", data.slice(0, 1000));
    }, 500);
});

// for parsing application/json
app.use(express.json());

// for parsing x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use(
    cors({
        origin: [
            "*",
            process.env.FRONTEND_URL,
            process.env.WEBADMIN_URL,
            process.env.APP_URL,
        ],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 24 * 60 * 60 * 100,
        },
    })
);

// initialize passport and passport session
app.use(passport.initialize());
app.use(passport.session());

// index route
const indexRoute = require("./routes/index");
const authRoutes = require("./routes/auth");

app.use("/api/v1", indexRoute);
app.use("/api/v1/auth/", authRoutes);

app.disable("x-powered-by");

// log requests to the console in dev mode
if (process.env.NODE_ENV !== "test") {
    app.use(morgan("dev")); // 'combined' outputs the Apache style LOGs
}

// GraphQL endpoint /api/v1/graphql
app.use(
    "/api/v1/graphql",
    graphqlHTTP({
        graphiql: process.env.NODE_ENV !== "production" ? true : false,
        schema: schema,
    })
);

// 404 route
app.use((req, res) => {
    return res.status(404).json({
        status: 404,
        message: "404 Not Found",
    });
});

const server = httpServer.listen(port, () =>
    console.log(`Server running on port: ${port}`)
);

module.exports = server;
