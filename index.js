// App startup and routing
const express = require('express');
const parser = require('body-parser')

const app = express();
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

const gridController = require('./controllers/grid-controller');
const columnController = require('./controllers/column-controller');
const taskController = require('./controllers/task-controller');
const commentController = require('./controllers/comment-controller');

app.get('/', (req, res) => {
    res.redirect('/grids');
});

app.use('/grids', gridController);
app.use('/columns', columnController);
app.use('/tasks', taskController);
app.use('/comments', commentController);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
    console.log(`✔︎ PORT: ${app.get('port')}`);
})