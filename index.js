const express = require('express');
const mainRouter = require('./router/main.route'); // Correct path to your router file
//todo remove this
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use('/main', mainRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  //remove

  mongoose
  .connect('mongodb+srv://abd:rasta299@cluster0.kngdizg.mongodb.net/finance')
  .then(() => console.log('connected to mongodb'))
  .catch((err) => console.error('could not connect to mongodb', err));
});

