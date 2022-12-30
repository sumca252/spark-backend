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
                                },
                                speed
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

                    res.body.data.getAllScooters[0].should.have.property(
                        "speed"
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
                                },
                                speed
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

                    res.body.data.getScooterById[0].should.have.property(
                        "speed"
                    );
                    done();
                });
        });

        it("Should add a scooter", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        mutation {
                            addScooter(
                                battery: "100",
                                status_id: "1",
                                longitude: "1.0",
                                latitude: "1.0",
                                price_id: "1",
                                speed: "0",
                                station_id: "1"
                            ) {
                                id
                            } 
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });

        it("Should update a scooter by id", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        mutation {
                            updateScooterById(
                                id: "40001",
                                battery: "100",
                                status_id: "1",
                                longitude: "1.0",
                                latitude: "1.0",
                                price_id: "1",
                                speed: "0",
                                station_id: "1"
                            ) {
                                id
                            } 
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });

        it("Should delete a scooter by id", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        mutation {
                            deleteScooterById(id: "40001") {
                                id
                            } 
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });

        it("Should return all scooters in a certain city by city id", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getAllScooterInCityByCityId(id: "1") {
                                id,
                                battery,
                                status {
                                    id,
                                    status
                                },
                                longitude,
                                latitude,
                                price {
                                    id,
                                    start_cost,
                                    travel_cost,
                                    parking_cost
                                },
                                speed,
                                station {
                                    id,
                                    station_name,
                                    city_name
                                }
                            } 
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);

                    res.body.data.getAllScooterInCityByCityId.should.be.a(
                        "array"
                    );
                    res.body.data.getAllScooterInCityByCityId[0].should.have.property(
                        "id"
                    );
                    res.body.data.getAllScooterInCityByCityId[0].should.have.property(
                        "battery"
                    );
                    res.body.data.getAllScooterInCityByCityId[0].should.have.property(
                        "status"
                    );
                    res.body.data.getAllScooterInCityByCityId[0].should.have.property(
                        "longitude"
                    );
                    res.body.data.getAllScooterInCityByCityId[0].should.have.property(
                        "latitude"
                    );
                    res.body.data.getAllScooterInCityByCityId[0].should.have.property(
                        "price"
                    );

                    res.body.data.getAllScooterInCityByCityId[0].should.have.property(
                        "speed"
                    );

                    res.body.data.getAllScooterInCityByCityId[0].should.have.property(
                        "station"
                    );

                    done();
                });
        });

        it("Should return all scooters in a certain station by station id", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getAllScooterInStationByStationId(id: "1") {
                            id,
                                battery,
                                status {
                                id, 
                                status
                            },
                            longitude,
                            latitude,
                            price {
                                id,
                                start_cost,
                                travel_cost,
                                parking_cost
                            },
                            speed,
                            station {
                                id,
                                station_name,
                                city_name
                            }
                                
                            } 
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);

                    res.body.data.getAllScooterInStationByStationId.should.be.a(
                        "array"
                    );
                    res.body.data.getAllScooterInStationByStationId[0].should.have.property(
                        "id"
                    );
                    res.body.data.getAllScooterInStationByStationId[0].should.have.property(
                        "battery"
                    );
                    res.body.data.getAllScooterInStationByStationId[0].should.have.property(
                        "status"
                    );
                    res.body.data.getAllScooterInStationByStationId[0].should.have.property(
                        "longitude"
                    );
                    res.body.data.getAllScooterInStationByStationId[0].should.have.property(
                        "latitude"
                    );
                    res.body.data.getAllScooterInStationByStationId[0].should.have.property(
                        "price"
                    );

                    res.body.data.getAllScooterInStationByStationId[0].should.have.property(
                        "speed"
                    );

                    res.body.data.getAllScooterInStationByStationId[0].should.have.property(
                        "station"
                    );

                    done();
                });
        });
    });
});
