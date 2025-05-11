import Loan from '../models/GetLoans.js';

export const applyLoan = async (req, res) => {
  try {
    const loan = new Loan(req.body);
    await loan.save();
    res.status(201).json({ message: 'Loan applied successfully', loan });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLoans = async (req, res) => {
  try {
    const loans = await Loan.find().sort({ createdAt: -1 });
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};