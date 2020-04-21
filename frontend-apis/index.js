const express = require('express');
const path = require('path');
const Business = require('../backEnd/db/models');

// Create the express app
const app = express();

// Set the pug view engine
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// Defining the routes
app.get('/', (req, res) => {
	res.render('index', { title: 'Home' });
});

app.get('/sign-up', (req, res) => {
	res.render('sign-up', { title: 'Sign Up' });
});

app.get('/log-in', (req, res) => {
	res.render('log-in', { title: 'Log In' });
});

app.get(`/businesses/:id`, (req, res) => {
	res.render('business');
});

// Defining the port
const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
