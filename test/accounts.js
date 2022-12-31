/* eslint-disable no-undef */
process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/server.js");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("/api/v1/graphql", () => {
    describe("Accounts", () => {
        it("Should return all accounts", (done) => {
            chai.request(server)
                .get("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getAllAccounts {
                                id,
                                customer {
                                    id,
                                    user {
                                        id,
                                        first_name,
                                        last_name
                                    }
                                }
                                balance,
                                payment_method
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.getAllAccounts.should.be.a("array");
                    res.body.data.getAllAccounts[0].should.have.property("id");
                    res.body.data.getAllAccounts[0].customer.should.have.property(
                        "id"
                    );

                    res.body.data.getAllAccounts[0].customer.user.should.have.property(
                        "first_name"
                    );
                    res.body.data.getAllAccounts[0].customer.user.should.have.property(
                        "first_name"
                    );
                    res.body.data.getAllAccounts[0].customer.user.should.have.property(
                        "last_name"
                    );

                    res.body.data.getAllAccounts[0].should.have.property(
                        "balance"
                    );
                    res.body.data.getAllAccounts[0].should.have.property(
                        "payment_method"
                    );

                    done();
                });
        });

        it("Should return a single account by customer id", (done) => {
            chai.request(server)
                .get("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getAccountByCustomerId(id: "9") {
                                id,
                                customer {
                                    id,
                                    user {
                                        id,
                                        first_name,
                                        last_name
                                    }
                                }
                                balance,
                                payment_method
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.getAccountByCustomerId.should.be.a("array");
                    res.body.data.getAccountByCustomerId[0].should.have.property(
                        "id"
                    );

                    res.body.data.getAccountByCustomerId[0].customer.should.have.property(
                        "id"
                    );
                    res.body.data.getAccountByCustomerId[0].customer.user.should.have.property(
                        "first_name"
                    );
                    res.body.data.getAccountByCustomerId[0].customer.user.should.have.property(
                        "last_name"
                    );
                    res.body.data.getAccountByCustomerId[0].should.have.property(
                        "balance"
                    );
                    res.body.data.getAccountByCustomerId[0].should.have.property(
                        "payment_method"
                    );

                    done();
                });
        });

        it("Should update payment method for an account by customer id", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        mutation {
                            updatePaymentMethodByCustomerId(
                                customer_id: "7", 
                                payment_method: "Paypal"
                            ) {
                                id,
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
