/* eslint-disable no-undef */
process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/server.js");

// Assertion Style
chai.should();

chai.use(chaiHttp);
let email = "";

describe("/api/v1/graphql", () => {
    describe("Auth", () => {
        it("Should register a new user", (done) => {
            email = `test${Math.floor(Math.random() * 1000000)}@test.com`;

            const newUser = {
                firstName: "John",
                lastName: "Doe",
                username: `jane.doe${Math.floor(Math.random() * 100000)}`,
                email: email,
                password: "password",
                phone: "1234567890",
                roleId: 2,
            };

            chai.request(server)
                .post("/api/v1/auth/register")
                .send(newUser)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("status");
                    res.body.should.have.property("success");
                    res.body.should.have.property("message");
                    res.body.message.should.be.a("string");
                    res.body.message.should.equal("User created successfully");

                    done();
                });
        });

        it("Should login a user", (done) => {
            chai.request(server)
                .post("/api/v1/auth/login")
                .send({
                    email: email,
                    password: "password",
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("user");
                    res.body.user.should.have.property("token");

                    done();
                });
        });
    });
});
