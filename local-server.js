//Install express server
const express = require('express');
const path = require('path');
const home = require('./api/home');
const courses = require('./api/courses');
const Joi = require('joi');
const app = express();

app.use(express.json());
app.use('/api/rest/home', home);
app.use('/api/rest/courses', courses);
// Serve only the static files form the dist directory
//app.use(express.static(__dirname + '/dist/demo-app'));

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname + '/dist/demo-app/index.html'));
// });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => console.log('server is listening on port 8080'));