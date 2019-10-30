const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
    res.send('hello from server');
})

/* app.route('/enroll').post(function(req, res){
    console.log(req.body);
}) */

 app.post('/enroll', function(req, res){
    console.log(req.body);
    res.status(401).send({"message":"Data Received"})
})   

app.listen(PORT, function(){
    console.log('server running on localhost:' + PORT);
})