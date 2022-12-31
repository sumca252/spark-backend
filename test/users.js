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
                            getUserByEmail(email: "smithkevin@example.net") {
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

        it("Should return a single user by username", (done) => {
            chai.request(server)
                .get("/api/v1/graphql")
                .send({
                    query: `
                        {
                            getUserByUsernameOrEmail(username:"JosephGuzman1374") {
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
                    res.body.data.getUserByUsernameOrEmail.should.be.a("array");
                    res.body.data.getUserByUsernameOrEmail.length.should.be.eq(
                        1
                    );
                    res.body.data.getUserByUsernameOrEmail[0].should.have.property(
                        "id"
                    );
                    res.body.data.getUserByUsernameOrEmail[0].should.have.property(
                        "first_name"
                    );
                    res.body.data.getUserByUsernameOrEmail[0].should.have.property(
                        "last_name"
                    );
                    res.body.data.getUserByUsernameOrEmail[0].should.have.property(
                        "password"
                    );
                    res.body.data.getUserByUsernameOrEmail[0].should.have.property(
                        "email"
                    );
                    res.body.data.getUserByUsernameOrEmail[0].should.have.property(
                        "phone"
                    );
                    res.body.data.getUserByUsernameOrEmail[0].should.have.property(
                        "role"
                    );

                    done();
                });
        });

        it("Should add a new user with unique username and email", (done) => {
            chai.request(server)
                .post("/api/v1/graphql")
                .send({
                    query: `
                        mutation {
                            createUser(
                                first_name: "John",
                                last_name: "Doe",
                                username: "johndoe123",
                                password: "password",
                                email: "john.doe@example.com"
                                phone: "1234567890",
                                role_id: "2"
                            ) {
                                id,
                                first_name,
                                last_name,
                                username,
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
                    res.body.data.createUser.should.be.a("object");
                    res.body.data.createUser.should.have.property("id");
                    res.body.data.createUser.should.have.property("first_name");
                    res.body.data.createUser.should.have.property("last_name");
                    res.body.data.createUser.should.have.property("username");
                    res.body.data.createUser.should.have.property("password");
                    res.body.data.createUser.should.have.property("email");
                    res.body.data.createUser.should.have.property("phone");
                    res.body.data.createUser.should.have.property("role");

                    done();
                });
        });
    });
});
