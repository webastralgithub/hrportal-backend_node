"use strict";

var express = require('express');

var mongoose = require('mongoose');

var bodyparser = require('body-parser');

var dotenv = require('dotenv');

var admin_router = require('./routes/admin_routes');

var hr_routes = require('./routes/hr_routes');

var auth = require('./routes/auth');

var commonRoutes = require('./routes/commonRoutes');

var employeeRoutes = require('./routes/employee');

var server = '127.0.0.1:27017'; // REPLACE WITH YOUR OWN SERVER

var database = 'hr_portal';
var PORT = process.env.PORT || 4800;

var cors = require('cors');

var app = express();
dotenv.config(); ///// middilewere

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({
  extended: false
}));
app.use(bodyparser.json()); //// DB Connection

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log('MongoDB connected!!');
})["catch"](function (err) {
  console.log('Failed to connect to MongoDB', err);
}); /////routes

app.use('/api/admin', admin_router);
app.use('/api/hr', hr_routes);
app.use('/api/auth', auth);
app.use('/api/user', commonRoutes);
app.use('/api/emp', employeeRoutes); //// Server running

app.listen(PORT, function () {
  console.log("Server running port ".concat(PORT));
});