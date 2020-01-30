// const should = require('chai').should()
// const expect = require('chai').expect
// const supertest = require('supertest')
// const chai = require("chai")
// const package = require("../package.json")
// const api = supertest('http://localhost:5000')

// //// Be sure to revert any post, put, or delete to strengthen tests!

// describe("package.json dependencies", () => {
//   it("should contain Express", done => {
//     expect(package.dependencies.express).not.to.be.undefined
//     done()
//   })

//   it("should contain Mongoose", done => {
//     expect(package.dependencies.mongoose).not.to.be.undefined
//     done()
//   })
// })

// describe("The project file structure ", () => {
//   it("should have a gridController at ./controllers/grid-controller.js", done => {
//     let importMessagesController = require("../controllers/grid-controller.js")

//     // expect(importMessagesController).to.not.throw()
//     expect(importMessagesController).not.to.be.undefined
//     done()
//   })

//   it("should have a gridController at ./controllers/grid-controller.js", done => {
//     let importMessagesController = require("../controllers/grid-controller.js")

//     // expect(importMessagesController).to.not.throw()
//     expect(importMessagesController).not.to.be.undefined
//     done()
//   })

//   it("should have a Grid model inside ./models/Grid.js", done => {
//     let importModel = require("../models/Grid")
//     expect(importModel).to.not.throw()
//     expect(importModel).not.to.be.undefined
//     done()
//   })

//   it("should have a Column model inside ./models/Column.js", done => {
//     let importModel = require("../models/Column")
//     expect(importModel).to.not.throw()
//     expect(importModel).not.to.be.undefined
//     done()
//   })
//   it("should have a Comment model inside ./models/Comment.js", done => {
//     let importModel = require("../models/Comment")
//     expect(importModel).to.not.throw()
//     expect(importModel).not.to.be.undefined
//     done()
//   })
//   it("should have a Task model inside ./models/Task.js", done => {
//     let importModel = require("../models/Task")
//     expect(importModel).to.not.throw()
//     expect(importModel).not.to.be.undefined
//     done()
//   })
// })


// describe("GET /grids",  () => {
//     it('should return a 200 response', done => {
//         api
//       .get("/grids")
//       .set("Accept", "application/json")
//       .expect(200, done)
//     });
//     it("should return an array", done => {
//         api
//           .get("/grids")
//           .set("Accept", "application/json")
//           .end((error, response) => {
//             expect(response.body).to.be.an('array');
//             done();
//           });
//   });
//   // maybe refactor to test for data types here
//   it("should return an array of objects that have a field called 'gridName'", done => {
//     api
//       .get("/grids")
//       .set("Accept", "application/json")
//       .end((err, res) => {
//         expect(res.body.every(i => i.gridName)).to.be.true;
//         done();
//       });
//   });
  
// });
// describe('POST /grids', () => {
//     before(done => {
//         api
//         .post("/grids")
//         .set("Accept", "application/json")
//         .send({
//             "gridName": "Test Board",
//             "color": "Red",
//             "gridDescription": "lorem ipsum"
//         })
//         .end(done);   
//   })
//   // How is this different than the GET test? 
//   // You should test for the something related to the data post
//   it("should return an array of objects that have a field called 'gridName'", done => {
//     api
//       .get("/grids")
//       .set("Accept", "application/json")
//       .end((err, res) => {
//         expect(res.body.every(i => i.gridName)).to.be.true;
//         done();
//       });
//   });

//   // it("should have a 'gridName' equal to Test Board", done => {
//   //   api
//   //     .get("/grids")
//   //     .set("Accept", "application/json")
//   //     .end((err, res) => {
//   //       let length = res.body.length;
//   //       console.log('res.body[length - 1].gridName = '+res.body[length].gridName)
//   //       expect(res.body[length-1].gridName).to.equal('Test Board')
//   //       done();
//   //     });
//   // });
  
// })
// describe("DELETE /grids", () => {
//     before(done => {
//       api
//       // this DELETES EVERY SINGLE GRID...
//         .delete("/grids")
//         .set("Accept", "application/json")
//         .end(done);
        
//     });
//     // this test is built to pass no matter what... must refactor...
//     it("should update a grid object to the collection grid", done => {
//       api
//         .get("/grids")
//         .set("Accept", "application/json")
//         .end((err, res) => {
//             console.log('res.body.length'+ res.body.length)
//           expect(res.body.length).to.equal(res.body.length);
//           done();
//         });
//     });
//     describe("PUT /grids", () => {
//         before(done => {
//           api
//             .put("/grids")
//             .send({
//               gridName: "example Column",
//               color: "#123151"
//             })
//             .set("Accept", "application/json")
//             .end(done);
//         });
// // this test is built to pass no matter what... must refactor...
//         it("should add a grid object to the collection grid and return it", done => {
//           api
//             .get("/grids")
//             .set("Accept", "application/json")
//             .end((err, res) => {
//                 console.log('res.body = '+res.body.length)
//               expect(res.body.length).to.equal(res.body.length);
//               done();
//             });
//         });
//       });
//   });