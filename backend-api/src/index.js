const express  = require('express');


const app = express();

//const routes = require('./routes/animal');
const db = require('./db');
const Sequelize = require('sequelize');

//const conection = new Sequelize('postgres://ssucdiniqlkyrr:0eee54f5d4418c5b4fa007f63abaa7babd80d69a639e120d7aea31107cadfe5c@ec2-50-19-222-129.compute-1.amazonaws.com:5432/ddde8q29bhrpuq');
/*
const conection = new Sequelize('ddde8q29bhrpuq', 'ssucdiniqlkyrr', '0eee54f5d4418c5b4fa007f63abaa7babd80d69a639e120d7aea31107cadfe5c', {
  host: 'ec2-50-19-222-129.compute-1.amazonaws.com',
  dialect: 'postgres'
});
*/
// Gig routes
app.use('/animal', require('./routes/animal'));
const connection = require('../src/libs/config');

// Test DB
app.get('/connection', function(req,res){
  connection.authenticate()
  .then(() => res.send('Database connected...'))
  .catch(err => res.send('Error: ' + err))
})


// Routes
/*
consign({cwd: __dirname})
  .include('libs/config.js')
  .then('db.js')
  .then('libs/middlewares.js')
  .then('routes')
  .then('libs/boot.js')
  .into(app);
  */

  module.exports = app;