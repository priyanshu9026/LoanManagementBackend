import express from 'express';
import { applyLoan, getLoans } from '../controllers/LoanController.js';

const router = express.Router();

router.post('/apply', applyLoan);
router.get('/all', getLoans);

export default router;
