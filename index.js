const express = require('express');
const parser = require('body-parser')
const cors = require("cors");

const app = express();
app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

const gridController = require('./controllers/grid-controller');
const taskController = require('./controllers/task-controller');

app.get('/', (req, res) => {
    res.redirect('/grids');
});

app.use('/grids', gridController);
app.use('/tasks', taskController);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
    console.log(`✔︎ PORT: ${app.get('port')}`);
})