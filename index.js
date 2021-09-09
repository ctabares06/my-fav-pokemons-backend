const express = require('express');
const app = express();
const routes = require('./routes/index');
const cookie = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie());
app.use('/api', routes);

app.listen(3001, () => {
  console.log("Server running at port : 3001");
})