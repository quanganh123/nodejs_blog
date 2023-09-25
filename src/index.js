const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 1000;

const router = require('./routes');
const db = require('./config/db');

db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.urlencoded(
//   extended: true
// ));
// app.use(express.join());

app.use(morgan('combined'));

app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});