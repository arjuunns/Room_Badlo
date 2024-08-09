const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const app = require('./app');

// const DB = mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   })
//   .then(() => {
//     console.log('DB connection successful 🍃');
//   });

const port = 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
