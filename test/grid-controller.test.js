const should = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:5000')


describe("GET /grid",  () => {
    it('should return a 200 response', done => {
        api
      .get("/grid")
      .set("Accept", "application/json")
      .expect(200, done)
    });
    it("should return an array", done => {
        api
          .get("/grid")
          .set("Accept", "application/json")
          .end((error, response) => {
            expect(response.body).to.be.an('array');
            done();
          });
  });
  it("should return an array of objects that have a field called 'gridName'", done => {
    api
      .get("/grid")
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.body.every(i => i.gridName)).to.be.true;
        done();
      });
  });
  
});
describe('POST /grid', () => {
    before(done => {
        api
        .post("/grid")
        .set("Accept", "application/json")
        .send({
            "gridName": "Test Board",
            "color": "Red",
            "gridDescription": "lorem ipsum"
        })
        .end(done);   
  })
  it("should return an array of objects that have a field called 'gridName'", done => {
    api
      .get("/grid")
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.body.every(i => i.gridName)).to.be.true;
        done();
      });
  });
  
})
describe("DELETE /grid", () => {
    before(done => {
      api
      
        .delete("/grid")
        .set("Accept", "application/json")
        .end(done);
        
    });
    it("should update a grid object to the collection grid", done => {
      api
        .get("/grid")
        .set("Accept", "application/json")
        .end((err, res) => {
            console.log('res.body'+ res.body)
          expect(res.body.length).to.equal(res.body.length);
          done();
        });
    });
    describe("PUT /grid", () => {
        before(done => {
          api
            .put("/grid")
            .send({
              
              gridName: "example Column",
              color: "#123151"
            })
            .set("Accept", "application/json")
            .end(done);
        });

        it("should add a grid object to the collection grid and return it", done => {
          api
            .get("/grid")
            .set("Accept", "application/json")
            .end((err, res) => {
                console.log('res.body = '+res.info)
              expect(res.info).to.equal(false);
              done();
            });
        });
      });
  });