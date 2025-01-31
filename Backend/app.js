const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');
const taskRoute = require('./routes/taskRoute');
const exportRoute = require('./routes/exportRoute');

// Initialize app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Handlebars as the template engine
app.engine('hbs', hbs.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Connection to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/', userRoute);
app.use('/', taskRoute);
app.use('/', exportRoute);

// server
app.listen(3000, () => console.log('Server running on port 3000'));
