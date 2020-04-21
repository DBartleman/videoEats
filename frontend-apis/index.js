const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

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

app.get(`/businesses/:id`, async (req, res) => {
	try {
		const fetchBusiness = await fetch(`http://localhost:8080/businesses/${req.params.id}`);
		const { business } = await fetchBusiness.json();
		res.render('business', { title: business.name, business });
	} catch (err) {
		console.error(err);
	}
});

app.get('/write-a-review', (req, res) => {
	res.render('write-a-review');
});

app.get('/businesses/search/?=', (req, res) => {
	res.render('search');
});

// Defining the port
const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
