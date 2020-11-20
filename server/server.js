const express = require('express');
const bodyParser = require('body-parser');
const app = express() ;

app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended:false})) ;

app.get('/ping', function (req, res, next) {
    console.log('join to main page');
    res.send('HaHaHaHaHaHaHaHaHa....')
});

app.listen(3000);
console.log("app running at port 3000") ;