var express = require('express');
var app = express();

app.use('/public', express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
})
app.get('/liste', function(req, res){
    res.sendFile(__dirname + '/data/data.json');
})




app.listen(3012, function(){
    console.log('server ON port : 3012')
})