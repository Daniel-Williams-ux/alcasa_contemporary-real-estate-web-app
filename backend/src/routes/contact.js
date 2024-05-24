const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST route to handle form submission
router.post('/', async (req, res) => {
  const { name, email, tel } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      tel
    });

    await newContact.save();
    res.status(201).json({ success: true, message: 'Contact saved successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;