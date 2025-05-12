import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 
import { applyLoan, getLoans } from './controllers/LoanController.js';

dotenv.config();  // Load .env variables

const app = express();
// app.use(cors({
//   origin: function (origin, callback) {
//     const allowedOrigins = ['http://localhost:5173', 'https://loanmanagementd.netlify.app'];
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true
// }));
// app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173', 'https://loanmanagementd.netlify.app'],
  credentials: true
 }));
app.use(express.json()); // Updated to include CORS with specific origin

// MongoDB connection
connectDB();

// Routes
app.post('/api/loans/apply', applyLoan);
app.get('/api/loans', getLoans);

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
