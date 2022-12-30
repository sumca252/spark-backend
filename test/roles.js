/* eslint-disable no-undef */
process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/server.js");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("/api/v1/graphql", () => {
    describe("Roles", () => {
        it("Should return all roles", (done) => {
            chai.request(server)
                .get("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getAllRoles {
                                id,
                                role
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.getAllRoles.should.be.a("array");
                    res.body.data.getAllRoles.length.should.be.eq(2);
                    res.body.data.getAllRoles[0].should.have.property("id");
                    res.body.data.getAllRoles[0].should.have.property("role");

                    res.body.data.getAllRoles[0].id.should.be.eq("1");
                    res.body.data.getAllRoles[0].role.should.be.eq("Admin");

                    res.body.data.getAllRoles[1].id.should.be.eq("2");
                    res.body.data.getAllRoles[1].role.should.be.eq("Customer");

                    done();
                });
        });

        it("Should return a single role by id", (done) => {
            chai.request(server)
                .get("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getRoleById(id: "2") {
                                id,
                                role
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.getRoleById.should.be.a("array");
                    res.body.data.getRoleById.length.should.be.eq(1);
                    res.body.data.getRoleById[0].should.have.property("id");
                    res.body.data.getRoleById[0].should.have.property("role");

                    res.body.data.getRoleById[0].id.should.be.eq("2");
                    res.body.data.getRoleById[0].role.should.be.eq("Customer");

                    done();
                });
        });
    });
});
