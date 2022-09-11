const express = require('express');
const cors = require('cors');

const router = require('./routers/index');

const app = express();

app.use(cors);

app.use(router);

app.listen(3000, () => {
  console.log('App is running at http://localhost:3000');
});
