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
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");

const schema = require("./graphql/schema");

const app = express();

const httpServer = require("http").createServer(app);

// for parsing application/json
app.use(express.json());

// for parsing x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// index route
const indexRoute = require("./routes/index");

app.use("/api/v1", indexRoute);
app.disable("x-powered-by");

// log requests to the console in dev mode
if (process.env.NODE_ENV !== "test") {
    app.use(morgan("combined")); // 'combined' outputs the Apache style LOGs
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
