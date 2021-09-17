require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/index');
const { sendErrorResponse } = require('./middlewares/errors');
const cookie = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie());
app.use('/api', routes);
app.use(sendErrorResponse);

app.listen(3001, () => {
  console.log("Server running at port : 3001");
})