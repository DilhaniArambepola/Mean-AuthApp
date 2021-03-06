const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

//On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
});

//On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err);
});

//port number
const port = process.env.PORT || '3000';

const users = require('./routes/users');

const app = express();

//CORS Middleware
app.use(cors());

//bodyParser middleware
app.use(bodyParser.json());

//Pasport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//index route
app.get('/', (req, res)=>{
    res.send('Invalid Endpoint');
});

//start server
app.listen(port, ()=>{
    console.log("Server started on port "+ port);
});