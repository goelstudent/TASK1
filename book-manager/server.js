// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;


mongoose.connect('mongodb://localhost:27017/bookManager', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api/books', require('./routes/bookRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
