import mongoose from 'mongoose';

const loanSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  amountNeeded: { type: Number, required: true },
  loanTenure: { type: Number, required: true },
  reasonForLoan: { type: String, required: true },
  employmentStatus: { type: String },
  employmentAddress: { type: String },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' }
}, { timestamps: true });

export default mongoose.model('Loan', loanSchema);
