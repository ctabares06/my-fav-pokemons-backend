require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();
const routes = require('./routes/index');
const { sendErrorResponse } = require('./middlewares/errors');

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    path: '/',
    maxAge: 1000 * 60 * 60 * 60,
    httpOnly: true,
    secure: false,
  }
  
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', routes);
app.use(sendErrorResponse);

app.listen(3001, () => {
  console.log("Server running at port : 3001");
})