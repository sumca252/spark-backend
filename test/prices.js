/* eslint-disable no-undef */
process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/server.js");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("/api/v1/graphql", () => {
    describe("Prices", () => {
        it("Should return all prices", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getAllPrices {
                                id,
                                start_cost,
                                travel_cost,
                                parking_cost,
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.data.getAllPrices.should.be.a("array");

                    done();
                });
        });

        it("Should return a price by id", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getPriceById(id: "1") {
                                id,
                                start_cost,
                                travel_cost,
                                parking_cost,
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.getPriceById.should.be.a("array");
                    res.body.data.getPriceById[0].should.have.property("id");
                    res.body.data.getPriceById[0].should.have.property(
                        "start_cost"
                    );
                    res.body.data.getPriceById[0].should.have.property(
                        "travel_cost"
                    );
                    res.body.data.getPriceById[0].should.have.property(
                        "parking_cost"
                    );

                    done();
                });
        });
    });
});
