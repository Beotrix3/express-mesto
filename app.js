const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '616b0bed80eeaa8575fe43ec'
  };

  next();
});

app.use('/', userRouter);
app.use('/', cardsRouter);

app.use((req, res) => {
  return res.status(404).send({ message: 'Страница не найдена' });
});

function getStart() {
  try {
    mongoose.connect('mongodb://localhost:27017/mestodb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`App listining on port: >>> ${PORT} <<<`));
  } catch (e) {
    console.log('Server ERROR: >>>', e.message);
  }
}

getStart();