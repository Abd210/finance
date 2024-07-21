const Main = require('../data/main.model');
const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();
const mainService = {
    addIncome: async (amount) => {
        console.log("You reached add income service");
        console.log(amount);
    
        try {
          // Find an existing document, assuming there's only one document in the collection
          let mainDoc = await Main.findOne();
    
          if (mainDoc) {
            // Update the existing document's income
            mainDoc.income = amount.income;
            await mainDoc.save();
          } else {
            // Create a new document with the provided income
            mainDoc = new Main({ income: amount.income });
            await mainDoc.save();
          }
    
          console.log("Income successfully added or updated");
          return mainDoc;
        } catch (error) {
          console.error("Error in addIncome service:", error);
          throw error;
        }
      },
    addCash:async (amount)=>{
        console.log("You reached add cash service");
        console.log(amount);
    
        try {
          // Find an existing document, assuming there's only one document in the collection
          let mainDoc = await Main.findOne();
    
          if (mainDoc) {
            // Accumulate the existing cash with the new amount
            mainDoc.cash = (Number(mainDoc.cash) || 0) + Number(amount.cash);
            await mainDoc.save();
          } else {
            // Create a new document with the provided cash
            mainDoc = new Main({ cash: amount.cash });
            await mainDoc.save();
          }
    
          console.log("Cash successfully added or updated");
          return mainDoc;
        } catch (error) {
          console.error("Error in addCash service:", error);
          throw error;
        }

    },
    addExpense:async (amount)=>{
        console.log("you reached add expense service");
        console.log(amount);
        try{
            // Find an existing document, assuming there's only one document in the collection
            let mainDoc = await Main.findOne();
            mainDoc.date= new Date().toISOString();
            if (mainDoc) {
              // Add the new expense to the existing expenses
              mainDoc.expenses.push(amount);
              await mainDoc.save();
            } else {
              // Create a new document with the provided expense
              mainDoc = new Main({ expenses: [amount] });
              await mainDoc.save();
            }
      
            console.log("Expense successfully added");
            return mainDoc;
        } catch(error) {
            console.error("Error in addExpense service:", error);
            throw error;
        }

    },
    addSaving:async (amount)=>{
        console.log("you reached add saving service")
        console.log(amount);
        try{
            // Find an existing document, assuming there's only one document in the collection
            let mainDoc = await Main.findOne();
      
            if (mainDoc) {
              // Update the existing document's saving
              mainDoc.saving = (Number(amount.saving)||0) +Number(mainDoc.saving||0);
              await mainDoc.save();
            } else {
              // Create a new document with the provided saving
              mainDoc = new Main({ saving: amount.saving });
              await mainDoc.save();
            }
      
            console.log("Saving successfully added or updated");
            return mainDoc;
        } catch(error) {
            console.error("Error in addSaving service:", error);
            throw error;
        }

    },
    addOwing: async (amount) => {
        console.log("You reached add owing service");
        console.log(amount);
    
        try {
          // Find an existing document, assuming there's only one document in the collection
          let mainDoc = await Main.findOne();
    
          if (mainDoc) {
            // Find the existing owing entry for the specified person
            const owingEntry = mainDoc.owing.find(entry => entry.person === amount.person);
    
            if (owingEntry) {
              // Update the existing entry's amount
              owingEntry.amount = (Number(owingEntry.amount) || 0) + Number(amount.amount);
            } else {
              // Add a new owing entry if the person doesn't already exist
              mainDoc.owing.push({
                person: amount.person,
                amount: Number(amount.amount),
              });
            }
    
            await mainDoc.save();
          } else {
            // Create a new document with the provided owing
            mainDoc = new MainModel({
              owing: [{
                person: amount.person,
                amount: Number(amount.amount),
              }],
            });
            await mainDoc.save();
          }
    
          console.log("Owing successfully added or updated");
          return mainDoc;
        } catch (error) {
          console.error("Error in addOwing service:", error);
          throw error;
        }
      },
      getBudget: async () => {
        console.log("You reached get budget service");
        try {
            // Fetch the document
            const mainDoc = await Main.findOne();

            if (!mainDoc) {
                throw new Error("Document not found"); // Handle the case where no document is found
            }

            const today = new Date();
            const currentMonth = today.getMonth(); // 0-indexed (0 for January, 1 for February, etc.)
            const currentYear = today.getFullYear();

            // Assume income and cash are fields representing total values for the month
            const income = mainDoc.income || 0;
            const cash = mainDoc.cash || 0;

            // Calculate total for current month (for simplicity, we're using the entire value)
            const total = Number(income) + Number(cash);

            // Calculate the number of days in the current month
            const daysInMonth = getDaysInMonth(currentYear, currentMonth + 1);

            if (daysInMonth <= 0) {
                throw new Error("Invalid number of days in the month"); // Handle invalid month days
            }

            // Compute daily budget
            const dailyBudget = total / daysInMonth;

            console.log(`Daily Budget: ${dailyBudget}`);
            return { dailyBudget: dailyBudget.toFixed(2) }; // Return data in a structured format

        } catch (error) {
            console.error("Error in getBudget service:", error);
            throw error; // Propagate error to be handled by the controller
        }
    },
    getAmount:async ()=>{
        console.log("you reached get amount service")
        try{
            // Fetch the document
            const mainDoc = await Main.findOne();

            if (!mainDoc) {
                throw new Error("Document not found"); // Handle the case where no document is found
            }

            // Assume income and cash are fields representing total values for the month
            const income = mainDoc.income || 0;
            const cash = mainDoc.cash || 0;

            console.log(`Income: ${income}, Cash: ${cash}`);
            return { income, cash }; // Return data in a structured format
        } catch (error) {
            console.error("Error in getBudget service:", error);
            throw error; // Propagate error to be handled by the controller
        }

    },
    getExpense: async () => {
        console.log("You reached get expense service");
        try {
            // Fetch the document
            const mainDoc = await Main.findOne();

            if (!mainDoc) {
                throw new Error("Document not found"); // Handle the case where no document is found
            }

            // Get the list of expenses
            const expenses = mainDoc.expenses || [];
            const totalExpenses = expenses.reduce((total, expense) => total + expense.sum, 0);

            // Return both total expenses and detailed list
            return {
                totalExpenses: totalExpenses.toFixed(2),
                expenses // Return the detailed list of expenses
            };
        } catch (error) {
            console.error("Error in getExpense service:", error);
            throw error; // Propagate error to be handled by the controller
        }
    },
    getSavings:async ()=>{
        console.log("you reached get savings service")
        try{
            // Fetch the document
            const mainDoc = await Main.findOne();

            if (!mainDoc) {
                throw new Error("Document not found"); // Handle the case where no document is found
            }

            // Assume saving is a field representing total values for the month
            const saving = mainDoc.saving || 0;

            console.log(`Saving: ${saving}`);
            return { saving }; // Return data in a structured format
        } catch (error) {
            console.error("Error in getSavings service:", error);
            throw error; // Propagate error to be handled by the controller
    }
    },
    getOwing:async ()=>{
        console.log("you reached get owing")
        try{
            // Fetch the document
            const mainDoc = await Main.findOne();

            if (!mainDoc) {
                throw new Error("Document not found"); // Handle the case where no document is found
            }

            // Get the list of owing entries
            const owing = mainDoc.owing || [];
            const totalOwing = owing.reduce((total, entry) => total + entry.amount, 0);

            console.log(`Owing: ${owing}`, `Total Owing: ${totalOwing}`);
            return { owing , totalOwing}; // Return data in a structured format
        } catch (error) {
            console.error("Error in getOwing service:", error);
            throw error; // Propagate error to be handled by the controller
        }

    }


}
module.exports = mainService;