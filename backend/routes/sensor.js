const express = require('express');
const SensorData = require('../models/SensorData');

const router = express.Router();

// POST route to save sensor data
router.post('/', (req, res) => {
  const { ax_g, ay_g, az_g } = req.body;

  const newData = new SensorData({
    ax_g,
    ay_g,
    az_g
  });

  newData.save()
    .then(() => res.status(201).send('Data saved successfully'))
    .catch(err => res.status(500).send('Error saving data: ' + err));
});

// GET route to retrieve sensor data
router.get('/', (req, res) => {
  SensorData.find()
    .then(data => res.json(data))
    .catch(err => res.status(500).send('Error retrieving data: ' + err));
});

module.exports = router;
