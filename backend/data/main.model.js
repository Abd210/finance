const mongoose = require('mongoose');

// Define the expense schema
const expenseSchema = new mongoose.Schema({
    purpose: {
        type: String,
    },
    category: {
        type: String,
    },
    sum: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

// Define the owing schema
const owingSchema = new mongoose.Schema({
    person: { type: String, required: true },
    amount: { type: Number, required: true, min: 0 }
  });

// Define the main schema
const mainSchema = new mongoose.Schema({
    income: {
        type: Number,
        default: 0,
    },
    cash: {
        type: Number,
        default: 0,
    },
    saving: {
        type: Number,
    },
    expenses: [expenseSchema], // Embed the expense schema
    owing: [owingSchema] // Use an array of owing objects
});

const MainModel = mongoose.model('cash', mainSchema);
module.exports = MainModel;
