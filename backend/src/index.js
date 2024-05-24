require('dotenv').config(); // Load environment variables first

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/form', contactRoutes);

// Verify MongoDB URI from environment variables
const mongoDBUri = process.env.MONGODB_URL;
console.log('MongoDB URL:', mongoDBUri);

// MongoDB connection
mongoose.connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
