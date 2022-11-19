const express = require('express');
const cors = require('cors');
const router = require('./router.ts');
import {box}  from './schemas/index'

const app = express();
// TODO enable cors only on sites with want + change console.log to more useful ones
app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
   try {
    await box.connection.sync(); // synchronize all models
    app.listen(3000, () => {
       console.log('Hello from SERVER');
    });
  } catch (error) {
    console.log('error in SERVER: ', error);
  }
})();

module.exports = app;
