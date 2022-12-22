import path from 'node:path';

import http from 'node:http';

import express from 'express';

import mongoose from 'mongoose';

import { router } from './router';

mongoose.connect('mongodb://localhost:27017')
  .then( () => {
    const app = express();
    const port = 3001;
    const server = http.createServer(app);

    app.use((req, res, next) => {
      res.setHeader('Acess-Control-Allow-Orign', '*');
      res.setHeader('Acess-Control-Allow-Methods', '*');
      res.setHeader('Acess-Control-Allow-Headers', '*');
      next();
    });

    app.use(express.json());
    app.use(router);

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

    server.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch( () => console.log('erro ao conectar'));









/*const mysql = require('mysql2') //require('mysql2');*/
/*
const Sequelize = require('sequelize');
//instancia de conexão ao banco de dados
const sequelize = new Sequelize('app','root','040303',{
    host:"localhost",
    dialect:'mysql'
});
//conexão estabelecida ou não
sequelize.authenticate().then(function(){

  const app = express();
  const port = 3001;

  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });
}).catch(function(){
  console.log("conexão falha! ");
});*/



