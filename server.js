const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

//db connetion
require('./db');

const routes = require('./routes');
app.use('/api', routes);

app.use('*', (req, res) => {
  return res.status(404).json({ message: 'Page Not Found' });
});

app.listen(3000, () => {
  console.log('App is Runnig at http://localhost/3000');
});
