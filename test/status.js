/* eslint-disable no-undef */
process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/server.js");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("/api/v1/graphql", () => {
    describe("Status", () => {
        it("Should return all statuses", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getAllStatuses {
                                id,
                                status
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.data.getAllStatuses.should.be.a("array");
                    res.body.data.getAllStatuses.length.should.be.eq(6);

                    done();
                });
        });

        it("Should return a status by id", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getStatusById(id: "1") {
                                id,
                                status
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.getStatusById.should.be.a("array");
                    res.body.data.getStatusById[0].should.have.property("id");
                    res.body.data.getStatusById[0].should.have.property(
                        "status"
                    );

                    done();
                });
        });
    });
});
