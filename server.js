// backend/server.js new

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/bookstore', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/cart', cartRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
 