const express = require('express');
const app = express();
const PORT = 5000 | process.env.PORT;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path')

const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const postRoute = require('./routes/post')
const categoryRoute = require('./routes/category')


dotenv.config();
app.use(express.json());
app.use('/images',express.static(path.join(__dirname,'/images')))


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('server connected to mongoDB');
  } catch (error) {
    throw error;
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});

app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);
app.use('/api/post',postRoute);
app.use('/api/category',categoryRoute);

app.listen(PORT, () => {
  connect();
  console.log(`server connected on port http://localhost:${PORT}`);
});
