const mongoose = require("mongoose");


const transactionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  dateOfSale: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  sold: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
    default: "", 
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;