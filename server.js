const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = 3001;

// Router import
const presensiRoutes = require('./routes/presensi');
const reportRoutes = require('./routes/reports');
const bookRoutes = require('./routes/books');

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  res.send('Home Page for API');
});
app.use('/api/books', bookRoutes);
app.use('/api/presensi', presensiRoutes);
app.use('/api/reports', reportRoutes);

// Jalankan server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
