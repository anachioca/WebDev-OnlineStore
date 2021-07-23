const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//database connection
const uri = 'mongodb+srv://paulinhoadm:123@cluster0.jrdfq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify: false });

//load models
const Product = require('./models/product');
const User = require('./models/user');

//loading routes
const index = require('./routes/index');
const products = require('./routes/products');
const users = require('./routes/users');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', index);
app.use('/products', products);
app.use('/users', users);


module.exports = app;
