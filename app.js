const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = require('./routers/index');

const app = express();

app.use(express.static('public'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

app.listen(3000, () => {
  console.log('App is running at http://localhost:3000');
});
