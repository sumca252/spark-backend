/* eslint-disable no-undef */
process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/server.js");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("/api/v1/graphql", () => {
    describe("Zones", () => {
        it("Should return all zones", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getAllZones {
                                id,
                                type,
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.data.getAllZones.should.be.a("array");

                    done();
                });
        });

        it("Should return a zone by id", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getZoneById(id: "1") {
                                id,
                                type,
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.getZoneById.should.be.a("array");
                    res.body.data.getZoneById[0].should.have.property("id");
                    res.body.data.getZoneById[0].should.have.property("type");

                    done();
                });
        });
    });
});
