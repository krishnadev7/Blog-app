const express = require('express');
const app = express();
const PORT = 5000 | process.env.PORT;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth')

dotenv.config();
app.use(express.json());


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('server connected to mongoDB');
  } catch (error) {
    throw error;
  }
};

app.use('/api/auth',authRoute);

app.listen(PORT, () => {
  connect();
  console.log(`server connected on port http://localhost:${PORT}`);
});
