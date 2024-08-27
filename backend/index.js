const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Define a Mongoose schema for the form data
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  tel: String,
});

const Form = mongoose.model('Form', formSchema);

// Define the POST route to handle form submissions
app.post('/api/form', async (req, res) => {
  try {
    const formData = new Form(req.body);
    await formData.save();
    res.json({ success: true, message: 'Form data saved successfully!' });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

  
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });
// app.get('/', (req, res) => {
//     res.send('Backend Server is running');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`)
// })