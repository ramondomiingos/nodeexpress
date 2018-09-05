'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//Carregar as Rotas
const indexRoutes = require('../routes/index');
const productRoute = require('../routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoutes);
app.use('/product', productRoute);

module.exports = app;