import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

// Adding the port number where we will run the app
const PORT = process.env.PORT || 4000;

// Creating the express app
const app = express();

// Adding CORS and JSON into the app
// CORS and JSON are middlewares
app.use(cors());
app.use(express.json());

// Calling the function to connect to MongoDB database
await connectDB();

// Importing the userRoutes
app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

// GET request for home page
app.get('/', (req, res) => {
    res.send("API Working Fine");
});

// Start the express app
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
