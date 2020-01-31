const should = require("chai").should();
const expect = require("chai").expect;
const supertest = require("supertest");
const api = supertest("http://localhost:5000");

describe("POST /tasks", () => {
  before(done => {
    api
      .get("/grids")
      .set("Accept", "application/json")
      .end((err, res) => {
        gridToPostTo = res.body[0]._id;
        done();
      });
  });

  before(done => {
    api
      .post(`/tasks/${gridToPostTo}`)
      .set("Accept", "application/json")
      .send({
        taskName: "meet MVP",
        taskDescription: "MVP needs"
      })
      .end(done);
  });
  it("should add a new task to the array", done => {
    api
      .get("/grids")
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.body[0].tasks.length).to.equal(2);
        done();
      });
  });
});

describe("PUT /tasks", () => {
  before(done => {
    api
      .get("/grids")
      .set("Accept", "application/json")
      .end((err, res) => {
        gridToUpdate = res.body[0]._id;
        taskToUpdate = res.body[0].tasks[1]._id;
        done();
      });
  });

  before(done => {
    api
      .put(`/tasks/${gridToPostTo}/${taskToUpdate}`)
      .set("Accept", "application/json")
      .send({
        taskName: "put test",
        taskDescription: "put test"
      })
      .end(done);
  });
  it("should add a new task to the array", done => {
    api
      .get("/grids")
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.body[0].tasks[1].taskName).to.equal("put test");
        done();
      });
  });
});

describe("DELETE /tasks", () => {
  before(done => {
    api
      .get("/grids")
      .set("Accept", "application/json")
      .end((err, res) => {
        gridToUpdate = res.body[0]._id;
        taskToUpdate = res.body[0].tasks[1]._id;
        done();
      });
  });

  before(done => {
    api
      .delete(`/tasks/${gridToPostTo}/${taskToUpdate}`)
      .set("Accept", "application/json")
      .end(done);
  });
  it("should add a new task to the array", done => {
    api
      .get("/grids")
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.body[0].tasks.length).to.equal(1);
        done();
      });
  });
});