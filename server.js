const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect databaase
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/users', require('./Routes/api/users'));
app.use('/api/auth', require('./Routes/api/auth'));
app.use('/api/profile', require('./Routes/api/profile'));
app.use('/api/posts', require('./Routes/api/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.POST || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
