const functions = require('firebase-functions');
const express  = require('express');
const Sequelize = require('sequelize');
//const app = express();
const app = require('../src/index')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
const params = {
  dialect: 'postgres',
      host: 'ec2-50-19-222-129.compute-1.amazonaws.com',
      port: 5432,
      protocol: 'postgres',
      define: {
        timestamps: false
      },
      //force: true,
      dialectOptions: {
        ssl: true
      }
  }

//const conection = new Sequelize('ddde8q29bhrpuq', 'ssucdiniqlkyrr', '0eee54f5d4418c5b4fa007f63abaa7babd80d69a639e120d7aea31107cadfe5c', params);


app.get('/ja', function(req, res) {
 
res.send('hello world') 
  

    
  });
/*

  
  // Test DB

  conection.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))
    */
   
  
 //exports.helloWorld = functions.https.onRequest((request, response) => {
 // response.send("Hello from Firebase!");
 //});

 exports.app = functions.https.onRequest(app);