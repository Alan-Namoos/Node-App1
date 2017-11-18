var express = require('express');
var app = express();
var data = require('./data.json');
var port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('global_data', data);

app.use(express.static('./public'));

app.use(require('./routes/index_route'));
app.use(require('./routes/users_route'));
app.use(require('./routes/user_route'));

app.listen(port, function(){
    console.log(`Running on port: ${port}`);
});