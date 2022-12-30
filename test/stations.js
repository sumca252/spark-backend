/* eslint-disable no-undef */
process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/server.js");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("/api/v1/graphql", () => {
    describe("Stations", () => {
        it("Should return all stations", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getAllStations {
                                id,
                                station_name,
                                city_name,
                                zone_type,
                                longitude,
                                latitude,
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.getAllStations.should.be.a("array");
                    res.body.data.getAllStations[0].should.be.a("object");
                    res.body.data.getAllStations[0].should.have.property("id");
                    res.body.data.getAllStations[0].should.have.property(
                        "station_name"
                    );
                    res.body.data.getAllStations[0].should.have.property(
                        "city_name"
                    );
                    res.body.data.getAllStations[0].should.have.property(
                        "zone_type"
                    );
                    res.body.data.getAllStations[0].should.have.property(
                        "longitude"
                    );
                    res.body.data.getAllStations[0].should.have.property(
                        "latitude"
                    );

                    done();
                });
        });

        it("Should return a station by id", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getStationById(id:"1") {
                                id,
                                station_name,
                                city_name,
                                zone_type,
                                longitude,
                                latitude,
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.getStationById.should.be.a("array");
                    res.body.data.getStationById[0].should.be.a("object");
                    res.body.data.getStationById[0].should.have.property("id");
                    res.body.data.getStationById[0].should.have.property(
                        "station_name"
                    );
                    res.body.data.getStationById[0].should.have.property(
                        "city_name"
                    );
                    res.body.data.getStationById[0].should.have.property(
                        "zone_type"
                    );
                    res.body.data.getStationById[0].should.have.property(
                        "longitude"
                    );
                    res.body.data.getStationById[0].should.have.property(
                        "latitude"
                    );

                    done();
                });
        });

        it("Should add a station", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        mutation {
                            addStation(
                                name: "Test Station",
                                zone_id: "1",
                                longitude: "1.1",
                                latitude: "1.1",
                                city_id: "1"
                            ) {
                                id,
                                station_name,
                                city_name,
                                zone_type,
                                longitude,
                                latitude,
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);

                    done();
                });
        });

        it("Should update a station by id", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        mutation {
                            updateStationById(
                                id: "1",
                                name: "Test Station",
                                zone_id: "1",
                                longitude: "1.1",
                                latitude: "1.1",
                                city_id: "1"
                            ) {
                                id,
                                station_name,
                                city_name,
                                zone_type,
                                longitude,
                                latitude,
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);

                    done();
                });
        });
    });
});
