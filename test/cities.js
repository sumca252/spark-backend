/* eslint-disable no-undef */
process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/server.js");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("/api/v1/graphql", () => {
    describe("Cities", () => {
        it("Should return all cities", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getAllCities {
                                id,
                                name,
                                country,
                                longitude,
                                latitude
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.data.getAllCities.should.be.a("array");
                    res.body.data.getAllCities[0].should.be.a("object");
                    res.body.data.getAllCities[0].should.have.property("id");
                    res.body.data.getAllCities[0].should.have.property("name");
                    res.body.data.getAllCities[0].should.have.property(
                        "country"
                    );
                    res.body.data.getAllCities[0].should.have.property(
                        "longitude"
                    );
                    res.body.data.getAllCities[0].should.have.property(
                        "latitude"
                    );

                    done();
                });
        });

        it("Should return a city by id", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getCityById(id: "1") {
                                id,
                                name,
                                country,
                                longitude,
                                latitude
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.getCityById.should.be.a("array");
                    res.body.data.getCityById[0].should.be.a("object");
                    res.body.data.getCityById[0].should.have.property("id");
                    res.body.data.getCityById[0].should.have.property("name");
                    res.body.data.getCityById[0].should.have.property(
                        "country"
                    );
                    res.body.data.getCityById[0].should.have.property(
                        "longitude"
                    );
                    res.body.data.getCityById[0].should.have.property(
                        "latitude"
                    );

                    done();
                });
        });
    });
});
