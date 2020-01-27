const seedData = require('./dev-seed.json');
const Grid = require('../models/Grid');

Grid.deleteMany({}).then(() => {
    Grid.create(seedData).then(grids => {
        console.log(grids);
        process.exit();
    })
})