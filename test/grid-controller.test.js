const should = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')
const chai = require("chai")
const package = require("../package.json")
const api = supertest('http://localhost:5000')



describe("package.json dependencies", () => {
  it("should contain Express", done => {
    expect(package.dependencies.express).not.to.be.undefined
    done()
  })

  it("should contain Mongoose", done => {
    expect(package.dependencies.mongoose).not.to.be.undefined
    done()
  })
})

describe("The project file structure ", () => {
  it("should have a gridController at ./controllers/grid.js", done => {
    let importMessagesController = require("../controllers/grid-controller.js")

    // expect(importMessagesController).to.not.throw()
    expect(importMessagesController).not.to.be.undefined
    done()
  })

  it("should have a gridController at ./controllers/grid.js", done => {
    let importMessagesController = require("../controllers/grid-controller.js")

    // expect(importMessagesController).to.not.throw()
    expect(importMessagesController).not.to.be.undefined
    done()
  })

  it("should have a Grid model inside ./models/Grid.js", done => {
    let importModel = require("../models/Grid")
    expect(importModel).to.not.throw()
    expect(importModel).not.to.be.undefined
    done()
  })

  it("should have a Task model inside ./models/Task.js", done => {
    let importModel = require("../models/Task")
    expect(importModel).to.not.throw()
    expect(importModel).not.to.be.undefined
    done()
  })
})


describe("GET /grids",  () => {
    it('should return a 200 response', done => {
        api
      .get("/grids")
      .set("Accept", "application/json")
      .expect(200, done)
    });
    it("should return an array", done => {
        api
          .get("/grids")
          .set("Accept", "application/json")
          .end((error, response) => {
            expect(response.body).to.be.an('array');
            done();
          });
  });
  it("should return an array of objects that have a field called 'gridName'", done => {
    api
      .get("/grids")
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.body.every(i => i.gridName)).to.be.true;
        done();
      });
  });
  
});
describe('POST /grids', () => {
  before(done => {
        api
        .post("/grids")
        .set("Accept", "application/json")
        .send({
            "gridName": "Test Board",
            "color": "Red",
            "gridDescription": "lorem ipsum some"
        })
        .end(done);   
  })
  it("Post should have a 'length' equal to 2", done => {
    let id
    api
      .get("/grids")
      .set("Accept", "application/json")
      .end((err, res) => {
        id = res.body[res.body.length-1]._id
        expect(res.body.length).to.equal(2)
      })
    api
    .delete("/grids/"+id)
    .set("Accept", "application/json")
    .end(done)
  })
})

describe("PUT /:id ", () => {
    let id;
    before(done => {
      api
      .get("/grids")
      .set("Accept", "application/json")
      .end((err, res) => {
        length = res.body.length;
        id = res.body[1]._id;
        console.log('id 1 = '+ id)
        done();
      });
          api
            .put("/grids/"+id)
            .set("Accept", "application/json")
            .send({
              gridName: "Test Board",
              color: "#123152",
            })
            .end(done);
        });
        it("should modify example Column object on the collection grid and return it", done => {
          console.log('id 2 = '+ id)
          api
            .get("/grids/"+id)
            .set("Accept", "application/json")
            .end((err, res) => {
              expect(res.body.color).to.equal('Red');
              done();
            });
        });
});
      describe("DELETE /grids/:id", () => {
        let id;
        before(done => {
          api
          .get("/grids")
          .set("Accept", "application/json")
           .end((err, res) => {
          id = res.body[0]._id;
         done();
      });
          api
            .delete("/grids/"+id)
            .set("Accept", "application/json")
            .end(done);
            
        });
        it("should delete a grid object by id from the collection grid", done => {
          api
            .get("/grids")
            .set("Accept", "application/json")
            .end((err, res) => {
                let length = res.body.length
              expect(length).to.equal(2);
              done();
            });
        });
    })
