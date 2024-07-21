const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main.controller');

 // Define unique paths for each GET route
    router.get('/budget', mainController.getBudget);
    router.get('/amount', mainController.getAmount);
    router.get('/expense', mainController.getExpense);
    router.get('/savings/', mainController.getSavings);
    router.get('/owing/', mainController.getOwing);

// Define POST routes
    router.post('/addIncome', mainController.addIncome);
    router.post('/addCash', mainController.addCash);
    router.post('/addExpense', mainController.addExpense);
    router.post('/addSaving', mainController.addSaving);
    router.post('/addOwing', mainController.addOwing);


module.exports = router;
