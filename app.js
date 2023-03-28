const express = require('express');
const bodyParser = require('body-parser');
// const request = require("request");
const mailchimp = require('@mailchimp/mailchimp_marketing');

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
    const fName = req.body.firstName;
    const lName = req.body.lastName;
    const email = req.body.email;

    // data object, mailchimp tells us how they want his layed out
    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_field: {
                    FNAME: fName,
                    LNAME: lName,
                },
            },
        ],
    };

    // change object into string
    const jsonData = JSON.stringify(data);

    const url = 'https://<dc>.api.mailchimp.com/3.0/lists/4f87f68cb6';

    const options = {
        method: 'POST',
        auth: "5ca65a5b71161d517a242b6c173caacd-us17"
    };

    const request = https(url, options, function (response) {
        response.on('data', function (data) {
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();
});

app.listen(3000, function () {
    console.log('server is running on port 3000');
});

// https://us17.admin.mailchimp.com/

// 5ca65a5b71161d517a242b6c173caacd-us17

// 4f87f68cb6
