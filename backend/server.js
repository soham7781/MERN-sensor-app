const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sensor_data', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import routes
const sensorRoutes = require('./routes/sensor');
app.use('/api/sensor', sensorRoutes);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
