import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 
import { applyLoan, getLoans } from './controllers/LoanController.js';

dotenv.config();  // Load .env variables

const app = express();
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-netlify-app.netlify.app'],
  credentials: true
}));
app.use(express.json());

// MongoDB connection
connectDB();

// Routes
app.post('/api/loans/apply', applyLoan);
app.get('/api/loans', getLoans);

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
