const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// allows you to use static files such as css or images
app.use(express.static('public'));

// gets the html file
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/signup.html');
});

// server grabbing the info from the home route html file
app.post('/', function (req, res) {
    let fName = req.body.firstName;
    let lNAme = req.body.lastName;
    let email = req.body.email;   
});

app.listen(3000, function () {
    console.log('server is running on port 3000');
});





// api key
// 1968eac2a3b54937dbdab59480b05018-us17

// Id
// 4f87f68cb6