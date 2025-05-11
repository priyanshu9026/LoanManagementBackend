import mongoose from 'mongoose';

const loanSchema = new mongoose.Schema({
  fullName: String,
  amount: Number,
  tenure: Number,
  employmentStatus: String,
  reason: String,
  address: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Loan = mongoose.model('Loan', loanSchema);
export default Loan;