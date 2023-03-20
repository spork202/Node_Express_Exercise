const express = require('express');
const axios = require('axios');

const app = express();

// Define a route for displaying all data from the API
app.get('/show', async (req, res) => {
	try {
		// Make a GET request to the API
		const response = await axios.get('https://mocki.io/v1/28378ac3-4d7d-428a-9418-70354eeb86ef');
		
		// Send the response data back to the client
		res.send(response.data);
	} catch (error) {
		// Log any errors that occur
		console.error(error);
		
		// Send an error response to the client
		res.status(500).send('Internal Server Error');
	}
});

// Define a route for displaying the value of achievement
app.get('/achievement', async (req, res) => {
	try {
		// Make a GET request to the API
		const response = await axios.get('https://mocki.io/v1/28378ac3-4d7d-428a-9418-70354eeb86ef');
		
		// Send the value of the achievement property back to the client
		res.send(response.data[0].achievement);
	} catch (error) {
		// Log any errors that occur
		console.error(error);
		
		// Send an error response to the client
		res.status(500).send('Internal Server Error');
	}
});

// Define a route for displaying the value of sayGreeting
app.get('/greet', async (req, res) => {
	try {
		// Make a GET request to the API
		const response = await axios.get('https://mocki.io/v1/28378ac3-4d7d-428a-9418-70354eeb86ef');
		
		// Send the value of the sayGreeting property back to the client
		res.send(response.data[1].sayGreeting);
	} catch (error) {
		// Log any errors that occur
		console.error(error);
		
		// Send an error response to the client
		res.status(500).send('Internal Server Error');
	}
});

app.listen(3001, () => {
	console.log('Server listening on port 3001');
});
