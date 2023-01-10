/* eslint-disable no-undef */
process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/server.js");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("/api/v1/graphql", () => {
    describe("Payments", () => {
        it("Should get all payments", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getAllPayments {
                                id
                                payment_method
                                account_id
                                customer_id
                                customer_name
                                email
                                total
                                date
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.data.getAllPayments.should.be.a("array");

                    res.body.data.getAllPayments[0].should.have.property("id");
                    res.body.data.getAllPayments[0].should.have.property(
                        "payment_method"
                    );
                    res.body.data.getAllPayments[0].should.have.property(
                        "account_id"
                    );
                    res.body.data.getAllPayments[0].should.have.property(
                        "customer_id"
                    );
                    res.body.data.getAllPayments[0].should.have.property(
                        "customer_name"
                    );
                    res.body.data.getAllPayments[0].should.have.property(
                        "email"
                    );
                    res.body.data.getAllPayments[0].should.have.property(
                        "total"
                    );
                    res.body.data.getAllPayments[0].should.have.property(
                        "date"
                    );

                    done();
                });
        });

        it("Should get payments by customer id", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getPaymentByCustomerId(customerId:"1") {
                                id
                                payment_method
                                account_id
                                customer_id
                                customer_name
                                email
                                total
                                date
                            }
                        }
                      
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.data.getPaymentByCustomerId.should.be.a("array");

                    res.body.data.getPaymentByCustomerId[0].should.have.property(
                        "id"
                    );
                    res.body.data.getPaymentByCustomerId[0].should.have.property(
                        "payment_method"
                    );
                    res.body.data.getPaymentByCustomerId[0].should.have.property(
                        "account_id"
                    );
                    res.body.data.getPaymentByCustomerId[0].should.have.property(
                        "customer_id"
                    );
                    res.body.data.getPaymentByCustomerId[0].should.have.property(
                        "customer_name"
                    );
                    res.body.data.getPaymentByCustomerId[0].should.have.property(
                        "email"
                    );
                    res.body.data.getPaymentByCustomerId[0].should.have.property(
                        "total"
                    );
                    res.body.data.getPaymentByCustomerId[0].should.have.property(
                        "date"
                    );

                    done();
                });
        });
    });
});
