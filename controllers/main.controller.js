const mainService = require('../services/main.service');

const mainController ={
    addIncome: async (req, res) => {
        try {
          console.log("You reached add income");
          const amount = req.body;
          console.log(amount);
          const updatedDoc = await mainService.addIncome(amount);
          res.status(200).send(updatedDoc);
        } catch (error) {
          console.error("Error in addIncome controller:", error);
          res.status(500).send({ error: 'Failed to add income' });
        }
      
    },
    addCash:async (req, res)=>{
        try {
            console.log("You reached add cash");
            const amount = req.body;
            console.log(amount);
            const updatedDoc = await mainService.addCash(amount);
            res.status(200).send(updatedDoc);
          } catch (error) {
            console.error("Error in addCash controller:", error);
            res.status(500).send({ error: 'Failed to add cash' });
          }
    },
    addExpense:async (req, res)=>{
        try{
            console.log("you reached add expense controller");
            const amount = req.body;
            console.log(amount);
            const updatedDoc = await mainService.addExpense(amount);
            res.status(200).send(updatedDoc);
        } catch (error) {
        console.error("Error in addExpense controller:", error);
        res.status(500).send({ error: 'Failed to add expense' });
    }
    },
    addSaving:async (req, res)=>{
        try{
            console.log("you reached add saving controller")
            amount = req.body;
            console.log(amount);
            const updatedDoc = await mainService.addSaving(amount);
            res.status(200).send(updatedDoc);
        } catch(error) {
            console.error("Error in addSaving controller:", error);
            res.status(500).send({ error: 'Failed to add saving' });
        }
    },
    addOwing:async (req, res)=>{
        try{
            console.log("you reached add owing controller")
            amount = req.body;
            console.log(amount);
            const updatedDoc = await mainService.addOwing(amount);
            res.status(200).send(updatedDoc);
        } catch(error) {
            console.error("Error in addOwing controller:", error);
            res.status(500).send({ error: 'Failed to add owing' });
        }
        
    },
    getBudget:async (req, res)=>{
        console.log("you reached get budget controller")
        const posts = await mainService.getBudget();
        res.status(200).send(posts);
        console.log("done")

    },
    getAmount:async (req, res)=>{
        console.log("you reached get amount controller")
        const posts = await mainService.getAmount();
        res.status(200).send(posts);
        
    },
    getExpense:async (req, res)=>{
        console.log("you reached get expense controller")
        const posts = await mainService.getExpense();
        res.status(200).send(posts);
        
    },
    getSavings:async (req, res)=>{
        console.log("you reached get savings controller")
        const posts = await mainService.getSavings();
        res.status(200).send(posts);
        
    },
    getOwing:async (req, res)=>{
        console.log("you reached get owing controller")
        const posts = await mainService.getOwing();
        res.status(200).send(posts);
        
    }
    
}
module.exports = mainController;
