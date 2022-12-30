/* eslint-disable no-undef */
process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/server.js");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("/api/v1/graphql", () => {
    describe("Customers", () => {
        it("Should return all customers", (done) => {
            chai.request(server)
                .get("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getAllCustomers {
                                id,
                                user {
                                    id,
                                    first_name,
                                    last_name,
                                    email,
                                    phone,
                                    role
                                }
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.getAllCustomers.should.be.a("array");
                    res.body.data.getAllCustomers[0].should.have.property("id");
                    res.body.data.getAllCustomers[0].user.should.have.property(
                        "first_name"
                    );
                    res.body.data.getAllCustomers[0].user.should.have.property(
                        "last_name"
                    );

                    res.body.data.getAllCustomers[0].user.should.have.property(
                        "email"
                    );
                    res.body.data.getAllCustomers[0].user.should.have.property(
                        "phone"
                    );
                    res.body.data.getAllCustomers[0].user.should.have.property(
                        "role"
                    );

                    done();
                });
        });

        it("Should return a single customer by id", (done) => {
            chai.request(server)
                .get("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getCustomerById(id: "9") {
                                id,
                                user {
                                    id,
                                    first_name,
                                    last_name,
                                    email,
                                    phone,
                                    role
                                }
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.getCustomerById.should.be.a("array");
                    res.body.data.getCustomerById[0].should.have.property("id");
                    res.body.data.getCustomerById[0].user.should.have.property(
                        "first_name"
                    );
                    res.body.data.getCustomerById[0].user.should.have.property(
                        "last_name"
                    );
                    res.body.data.getCustomerById[0].user.should.have.property(
                        "email"
                    );
                    res.body.data.getCustomerById[0].user.should.have.property(
                        "phone"
                    );
                    res.body.data.getCustomerById[0].user.should.have.property(
                        "role"
                    );

                    done();
                });
        });
    });
});
