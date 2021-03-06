# Mello Trello (Backend)
This is the backend repository for the General Assembly Project 3 group project. This repository will be used to house the backend construct of our group's project - a project management board inspired by Trello, currently dubbed Mello Trello. 

## Project Description
This is a MERN full stack group development project utilizing MongoDB, Express, React, and Node - not to mention HTML, CSS, and JavaScript and includes the Next.js library and is deployed via Heroku and MongoDB Atlas. 

The project is a simplified replication of the project planning app Trello. The front end provides a gui to create 'Grids' which are overall projects with sub tasks associated with them. Grids consist of Columns and contain more specific sub tasks - 'Cards' - for completion for the overall Column objective. Cards have the ability to take on comments for ongoing discussion of each specific task. 

Later versions of the application will see increased functionality of task assignment, due dates, reminders, color coding, drag and drop gui functionality, and much more. 

## Project Links
- [frontend repo](https://github.com/svkalvakolanu/teamgridFE)
- [backend repo](https://github.com/macuser413/mello-trello-backend)
- [frontend deployment](https://teamgrid.herokuapp.com/)
- [backend deployment](https://teamgrid-be.herokuapp.com/)

## Entity-Relationship Diagram
- [Entity-Relationship Diagram](https://ibb.co/y55VzYJ)

## Wireframes
- [Home](https://ibb.co/m5T3J76)
- [New Grid](https://ibb.co/LRqnhQ4)
- [Grid View](https://ibb.co/HXWCMpg)
- [Card View](https://ibb.co/d7GCYzv)

### MVP/PostMVP

#### MVP
##### Bronze
- Front-End CRUD
- Back-End CRUD
- Fully linked routes between the front and back ends. 
- Front and Back ends deployed
- Device responsive build and functionality

#### Post MVP
##### Silver
- users
- task assignment
- due dates
- priority

##### Gold
- drag & drop functionality

## Components
[Component Tree]('/planning/component-tree.txt')
```
Current Component Tree:
.
├── Grids
│   ├── Columns
│   │   ├── ColumnAdd
│   │   │   ├── ColumnAddButton.js
│   │   │   └── ColumnAddModal.js
│   │   ├── ColumnDelete
│   │   │   ├── ColumnDeleteButton.js
│   │   │   └── Maybe\ -\ ColumnDeleteModal.js
│   │   ├── ColumnDisplay
│   │   │   ├── Column.js
│   │   │   ├── ColumnContainer.js
│   │   │   └── ColumnDisplay.js
│   │   ├── ColumnUpdate
│   │   │   ├── ColumnUpdateButton.js
│   │   │   └── ColumnUpdateModal.js
│   │   └── Tasks
│   │       ├── Comments
│   │       │   ├── CommentAdd
│   │       │   │   └── CommentsAddInput.js
│   │       │   ├── CommentDelete
│   │       │   │   └── Maybe\ -\ CommentDelete.js
│   │       │   ├── CommentDisplay
│   │       │   │   ├── Comment.js
│   │       │   │   ├── CommentsContainer.js
│   │       │   │   └── CommentsDisplayModal.js
│   │       │   └── CommentUpdate
│   │       │       └── Maybe\ -\ CommentUpdate.js
│   │       ├── TaskAdd
│   │       │   ├── TaskAddButton.js
│   │       │   └── TaskAddModal.js
│   │       ├── TaskDelete
│   │       │   └── TaskDeleteButton.js
│   │       ├── TaskDisplay
│   │       │   ├── Task.js
│   │       │   └── TaskContainer.js
│   │       └── TaskUpdate
│   │           ├── TaskUpdateButton.js
│   │           └── TaskUpdateModal.js
│   ├── GridAdd
│   │   ├── GridAddButton.js
│   │   └── GridAddModal.js
│   ├── GridDelete
│   │   ├── GridDeleteButton.js
│   │   └── Maybe\ -\ GridBoardModal.js
│   ├── GridDisplay
│   │   ├── Grid.js
│   │   ├── GridContainer.js
│   │   └── MyGrids.js
│   └── GridUpdate
│       ├── GridUpdateButton.js
│       └── GridUpdateModal.js
├── Index
│   ├── SimpleBackground.js
│   └── Teamgrid.js
└── Layout
    ├── Footer
    │   ├── Courtesies.js
    │   ├── Footer.js
    │   └── MadeBy.js
    ├── Header
    │   ├── Header.js
    │   ├── Mark.js
    │   └── Nav.js
    └── Layout.js
```

## Models
1. Grid
- This holds and references the Columns and Grid CRUD functionality.
2. Column
- This holds and references the Cards and Column CRUD functionality.
3. Card
- This holds and references the Comments and Card CRUD functionality.
4. Comments
- This holds Comments and Comment CRUD functionality.

## Additional Libraries
[Next.js](https://nextjs.org/)

## Dependencies
- express
- body-parser
- cors
- node-express-mongodb-basic
- mongoose
- node-parser
- chai
- mocha
- supertest

## Code Snippet
We'll be using reference to route data accordingly to other models. 

```
const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const GridSchema = new Schema({
  boardName: String,
  boardDescription: String,
  boardLists: {
    type: Schema.Types.ObjectId,
    ref: "List"
  }
});

const Grid = mongoose.model('Grid', GridSchema);

module.exports = Grid;
```

```
router.get("/", (req, res) => {
  Grid.
  find({}).
  populate({
    path: 'tasks',
    model: 'Task'
  }).then(grids => {
    res.json(grids)
  });
})
```

## Issues and Resolutions

#### Sample Issue
**ERROR**
**RESOLUTION**