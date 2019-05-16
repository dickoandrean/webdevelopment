require ('./models/db');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const karyawanController = require('./controllers/karyawanController');

//init app
var app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs' , defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');



//memulai server
app.listen(3000,function() {
    console.log("server di mulai pada port 3000");
}
);

app.use('/', karyawanController);