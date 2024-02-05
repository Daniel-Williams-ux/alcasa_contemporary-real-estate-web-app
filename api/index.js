import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import userRouter from './routes/user.route.js';
import formRouter from './routes/form.route.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: __dirname + '/../.env' });
const app = express();

app.use(express.json())

app.listen(3000, () => {
    console.log('server is running on port 3000')
  })

  app.use('/api/user', userRouter);
  app.use('/api/form', formRouter);

  //middleware
  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

  const mySecret = process.env.MONGO;

  const client = mongoose.connect(mySecret);
  
  const connectToDatabase = async () => {
      try {
          await client
          console.log(`Connected to MongoDB`)
  
      } catch (err) {
          console.error(`Error connecting to the database: ${err}`)
      }
  }
  connectToDatabase();