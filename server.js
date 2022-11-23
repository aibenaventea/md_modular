const express = require('express');
const mongoose = require('./server/config/mongoose');
const bodyParser = require('body-parser');
const router = require('./server/config/routes')

const app =express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use(router);
app.use(express.static(__dirname + '/client/public'));
app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');

const port = 8000;

app.listen(port);
console.log(`server is listening on port ${port}`)