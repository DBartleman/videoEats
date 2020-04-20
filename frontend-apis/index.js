const express = require('express');
const path = require('path');

// Create the express app
const app = express();

// Set the pug view engine
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// Defining the routes
app.get('/', (req, res) => {
	res.render('index');
});

app.get('/sign-up', (req, res) => {
	res.render('sign-up');
});

app.get('/log-in', (req, res) => {
	res.render('log-in');
});

// Defining the port
const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
