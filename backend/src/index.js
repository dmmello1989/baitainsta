const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://daniel:daniel42@cluster0-qoxyx.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

app.use(require('./routes.js'));

app.listen(3333);