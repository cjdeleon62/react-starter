const path = require('path');
const express = require('express');

// instantiate express object
const app = express();

// allow files in the dist folder to be accessed
app.use(express.static(path.join(__dirname, '../dist')));

// for any path serve our react app
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

// Parties always start on port 3000
app.listen('3000', () => console.log('Starting the application. Go to https://localhost:8080'));
