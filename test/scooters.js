/* eslint-disable no-undef */
process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/server.js");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("/api/v1/graphql", () => {
    describe("Scooters", () => {
        it("Should return all scooters", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getAllScooters {
                                id,
                                battery,
                                status {
                                  status
                                },
                                longitude,
                                latitude,
                                price {
                                  start_cost,
                                  travel_cost,
                                  parking_cost,
                                }
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.data.getAllScooters[0].should.be.a("object");
                    res.body.data.getAllScooters[0].should.have.property("id");
                    res.body.data.getAllScooters[0].should.have.property(
                        "battery"
                    );
                    res.body.data.getAllScooters[0].should.have.property(
                        "status"
                    );
                    res.body.data.getAllScooters[0].should.have.property(
                        "longitude"
                    );
                    res.body.data.getAllScooters[0].should.have.property(
                        "latitude"
                    );
                    res.body.data.getAllScooters[0].should.have.property(
                        "price"
                    );

                    done();
                });
        });

        it("Should return a scooter by id", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getScooterById(id: "1") {
                                id,
                                battery,
                                status {
                                  status
                                },
                                longitude,
                                latitude,
                                price {
                                  start_cost,
                                  travel_cost,
                                  parking_cost,
                                }
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.getScooterById.should.be.a("array");
                    res.body.data.getScooterById[0].should.have.property("id");
                    res.body.data.getScooterById[0].should.have.property(
                        "battery"
                    );
                    res.body.data.getScooterById[0].should.have.property(
                        "status"
                    );
                    res.body.data.getScooterById[0].should.have.property(
                        "longitude"
                    );
                    res.body.data.getScooterById[0].should.have.property(
                        "latitude"
                    );
                    res.body.data.getScooterById[0].should.have.property(
                        "price"
                    );
                    done();
                });
        });
    });
});
