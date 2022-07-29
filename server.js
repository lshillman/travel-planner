const express = require('express');
// const routes = require('./routes');
const sequelize = require('./config/connection');
const {Traveler, Location, Trips} = require('./models/index.js');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
// app.use(routes);

app.get('/api/travelers', async (req, res) => {
    const userData = await Traveler.findAll().catch((err) => {
      res.status(400).json(err);
    });
    res.status(200).json(userData);
  });



// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
