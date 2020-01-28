// App startup and routing
const express = require('express');

const app = express();

const gridController = require('./controllers/grid-controller');

app.use('/grid', gridController);

app.get('/', (req, res) => {
    res.redirect('/grid');
});

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
    console.log(`✔︎ PORT: ${app.get('port')}`);
})

// app.listen(5000, () => console.log("Yo yo, up and running on 5000!"));