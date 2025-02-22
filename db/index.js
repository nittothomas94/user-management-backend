// require('dotenv').config();
// const mongoose = require('mongoose');

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('DB Connected');
//   })
//   .catch(e => {
//     console.log('DB Connection Error:', e);
//   });

// module.exports = mongoose;

const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));
