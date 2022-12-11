/* eslint-disable no-undef */
process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/server.js");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("/api/v1/graphql", () => {
    describe("Users", () => {
        it("Should return all users", (done) => {
            chai.request(server)
                .get("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getAllUsers {
                                id,
                                first_name,
                                last_name,
                                password,
                                email,
                                phone,
                                role
                            }
                        } 
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.getAllUsers.should.be.a("array");
                    res.body.data.getAllUsers.length.should.be.eq(1000);
                    res.body.data.getAllUsers[0].should.have.property("id");
                    res.body.data.getAllUsers[0].should.have.property(
                        "first_name"
                    );
                    res.body.data.getAllUsers[0].should.have.property(
                        "last_name"
                    );
                    res.body.data.getAllUsers[0].should.have.property(
                        "password"
                    );
                    res.body.data.getAllUsers[0].should.have.property("email");
                    res.body.data.getAllUsers[0].should.have.property("phone");
                    res.body.data.getAllUsers[0].should.have.property("role");

                    done();
                });
        });

        it("Should return a single user by id", (done) => {
            chai.request(server)
                .get("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getUserById(id: "1") {
                                id,
                                first_name,
                                last_name,
                                password,
                                email,
                                phone,
                                role
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.getUserById.should.be.a("array");
                    res.body.data.getUserById.length.should.be.eq(1);
                    res.body.data.getUserById[0].should.have.property("id");
                    res.body.data.getUserById[0].should.have.property(
                        "first_name"
                    );
                    res.body.data.getUserById[0].should.have.property(
                        "last_name"
                    );
                    res.body.data.getUserById[0].should.have.property(
                        "password"
                    );
                    res.body.data.getUserById[0].should.have.property("email");
                    res.body.data.getUserById[0].should.have.property("phone");
                    res.body.data.getUserById[0].should.have.property("role");

                    done();
                });
        });

        it("Should return a single user by email", (done) => {
            chai.request(server)
                .get("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getUserByEmail(email: "palinho.sparvsson@fejka.nu") {
                                id,
                                first_name,
                                last_name,
                                password,
                                email,
                                phone,
                                role
                            }
                        }
                    `,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.getUserByEmail.should.be.a("array");
                    res.body.data.getUserByEmail.length.should.be.eq(1);
                    res.body.data.getUserByEmail[0].should.have.property("id");
                    res.body.data.getUserByEmail[0].should.have.property(
                        "first_name"
                    );
                    res.body.data.getUserByEmail[0].should.have.property(
                        "last_name"
                    );
                    res.body.data.getUserByEmail[0].should.have.property(
                        "password"
                    );
                    res.body.data.getUserByEmail[0].should.have.property(
                        "email"
                    );
                    res.body.data.getUserByEmail[0].should.have.property(
                        "phone"
                    );
                    res.body.data.getUserByEmail[0].should.have.property(
                        "role"
                    );

                    done();
                });
        });
    });
});
