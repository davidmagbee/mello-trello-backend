const should = require("chai").should();
const expect = require("chai").expect;
const supertest = require("supertest");
const api = supertest("http://localhost:5000");

describe("GET /grids", () => {
  it("should return a 200 response", done => {
    api
      .get("/grids")
      .set("Accept", "application/json")
      .expect(200, done);
  });

    it("should return 2 grids", done => {
    api
      .get("/grids")
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.body.length).to.equal(2);
        done()
      });
  });
  
});

describe("POST /grids", () => {
  before(done => {
    api
      .post("/grids")
      .set("Accept", "application/json")
      .send({
        gridName: "meet MVP",
        gridDescription: "MVP needs"
      })
      .end(done);
  });

  it("should add a new grid", done => {
    api
      .get("/grids")
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.body.length).to.equal(3);
        done();
      });
  });
});

  
  describe("PUT /grids", () => {
        before(done => {
          api
            .get("/grids")
            .set("Accept", "application/json")
            .end((err, res) => {
              preLength = res.body.length;
              toPut = res.body[preLength - 1]._id;
              done();
            });
        });

        before(done => {
          api
            .put(`/grids/${toPut}`)
            .set("Accept", "application/json")
            .send({
              gridName: "put test",
              gridDescription: "put test"
            })
            .end(done);
        });


  it("should modify the last item in the grids array's gridName to be 'put test'", done => {
    api
      .get("/grids")
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.body[preLength-1].gridName).to.equal("put test");
        done()
      });
  });
  });


  describe("DELETE /grids", () => {
    let preLength;
    let toDelete;

    before(done => {
      api
        .get("/grids")
        .set("Accept", "application/json")
        .end((err, res) => {
          preLength = res.body.length;
          toDelete = res.body[preLength - 1]._id;
          done();
        });
    });

    before(done => {
      api
        .delete(`/grids/${toDelete}`)
        .set("Accept", "application/json")
        .end(done);
    });

    it("should delete a grid by id", done => {
      api
        .get("/grids")
        .set("Accept", "application/json")
        .end((err, res) => {
          expect(res.body.length).to.equal(2);
          done();
        });
    });
  });

