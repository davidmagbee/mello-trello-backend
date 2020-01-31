const should = require("chai").should();
const expect = require("chai").expect;
const supertest = require("supertest");
const api = supertest("http://localhost:5000");

// describe("GET /task", () => {
//   it("should return a 200 response", done => {
//     api
//       .get("/tasks")
//       .set("Accept", "application/json")
//       .expect(200, done);
//   });
//   it("should return an array", done => {
//     api
//       .get("/tasks")
//       .set("Accept", "application/json")
//       .end((err, res) => {
//         expect(res.body).to.be.an.apply("array");
//       });
//   });
//   it("should return an array of objects with with name and description", done => {
//     api
//       .get("/tasks")
//       .set("Accept", "application/json")
//       .end((err, res) => {
//         expect(res.body[0].to.have.property("taskName"));
//         done();
//       });
//   });
// });

describe("POST /tasks", () => {
    before(done => {
        api
            .post("/tasks")
            .set("Accept", "application/json")
            .send({
                taskName: "meet MVP",
                taskDescription: "MVP needs"
            })
            .end(done)
    })
    it("should add a new task to the array", done => {
        api
            .get("/grids")
            .set("Accept", "application/json")
            .end((err, res) => {
                expect(res.body[0].tasks.length).to.equal(1)
            })
        api
            .delete("/tasks/meet mvp")
            .set("Accept", "application/json")
            .end(done);
    })
})

// describe("PUT /grids/tasks/:tId", () => {
//     before(done => {
//         api
//             .put("/grids/5e333a144ec47a0c2435ba5a/5e333a144ec47a0c2435ba59/")
//             .set("Accept", "application/json")
//             .send({
//                 taskName: "meet MVP",
//                 taskDescription: "task PUT test",
//             })
//             .end(done)
//     })
//     it("should update existing task", done => {
//         api
//             .get("/grids/5e333a144ec47a0c2435ba5a/._id")
//             .set("Accept", "application/json")
//             .end((err, res) => {
//                 expect(res.body.taskDescription).to.equal("task PUT test")
//             })
//         api
//             .put("/grids/5e333a144ec47a0c2435ba5a/5e333a144ec47a0c2435ba59")
//             .set("Accept", "application/json")
//             .send({
//                 taskName: "example Task",
//                 taskDescription: "lorem ipsum",
//             })
//             .end(done)
//     })
// })

describe("DELETE /tasks/example task", () => {
    before(done => {
        api
            .delete("/grids/5e333a144ec47a0c2435ba5a/5e333a144ec47a0c2435ba59")
            .set("Accept", "application/json")
            .end(done);
    })
    it("should remove a task from the object", done => {
        api
            .get("/grids/5e333a144ec47a0c2435ba5a/5e333a144ec47a0c2435ba59")
            .set("Accept", "application/json")
            // .end((err, res) => {
            //     expect(res.body).to.be.undefined
            // })
            // api
            // .post("/grids/5e333a144ec47a0c2435ba5a/5e333a144ec47a0c2435ba59")
            // .set("Accept", "application/json")
            // .send({
            //     taskName: "example Task",
            //     taskDescription: "lorem ipsum"
            // })
            .end(done)
    })
})