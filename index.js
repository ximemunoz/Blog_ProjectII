const express = require('express');
const path = require('path');

var app = express();
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('home'));

app.listen(app.get('port'), function(){
    console.log('Listening on server 3000', app.get('port'));
})
