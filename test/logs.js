/* eslint-disable no-undef */
process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/server.js");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("/api/v1/graphql", () => {
    describe("Logs", () => {
        it("Should create a new log and return newly created log id", (done) => {
            const query = `
                mutation {
                    createLog(
                        start_longitude: "0.0",
                        start_latitude: "0.0",
                        customer_id: "1",
                        price_id: "1",
                        scooter_id: "1"
                    ) {
                        id
                    }
                }`;

            chai.request(server)
                .post("/api/v1/graphql")
                .send({ query })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.data.createLog.should.have.property("id");
                    done();
                });
        });

        it("Should create a new log and return newly created log id", (done) => {
            const query = `
                mutation {
                    createLog(
                        start_longitude: "0.0",
                        start_latitude: "0.0",
                        customer_id: "1",
                        price_id: "1",
                        scooter_id: "1"
                    ) {
                        id
                    }
                }`;

            chai.request(server)
                .post("/api/v1/graphql")
                .send({ query })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.data.createLog.should.have.property("id");
                    done();
                });
        });

        it("Should create a new log and return newly created log id", (done) => {
            const query = `
                mutation {
                    createLog(
                        start_longitude: "0.0",
                        start_latitude: "0.0",
                        customer_id: "1",
                        price_id: "1",
                        scooter_id: "12"
                    ) {
                        id
                    }
                }`;

            chai.request(server)
                .post("/api/v1/graphql")
                .send({ query })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.data.createLog.should.have.property("id");
                    done();
                });
        });
    });
});
