/* eslint-disable no-undef */
process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/server.js");

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("Spark Backend Server", () => {
    /**
     * Test the GET route
     */
    describe("GET /", () => {
        it("Should be 200 and display message", (done) => {
            chai.request(server)
                .get("/api/v1")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a("object");
                    response.body.should.have.property("message");
                    response.body.message.should.be.eq(
                        "Welcome to Spark Backend API"
                    );
                    done();
                });
        });
    });

    it("Should be 404", (done) => {
        chai.request(server)
            .get("/api/v1/invalid")
            .end((err, response) => {
                response.should.have.status(404);
                response.body.should.be.a("object");
                response.body.should.have.property("message");
                response.body.message.should.be.eq("404 Not Found");
                done();
            });
    });
});
