var express = require('express');
var app = express();
var path = require('path')

PORT = process.env.PORT || 7990
var static = path.join(__dirname, 'public')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/htmlroutes.js')(app)
require('./app/routing/apiroutes.js')(app)

app.listen(PORT)