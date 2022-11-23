const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const https = require ("https");

require('dotenv').config()

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req,res) => {
const firstName = req.body.fName;
const lastName = req.body.lName;
const email = req.body.email;

var data = {
members:[
    {
        email_address: email,
        status: "subscribed",
        merge_fields: {
            FNAME: firstName,
            LNAME: lastName
        }
    }
]
};

let jsonData = JSON.stringify(data);
let url = `https://us21.api.mailchimp.com/3.0/lists/${process.env.AUDIENCE_ID}`;
let options = {
method: "POST",
auth: `paciek:${process.env.MAILCHIMP_API}`
};

const request = https.request(url, options, function(response){

    if(response.statusCode === 200){
        res.sendFile(__dirname + "/success.html")
    } else {
        res.sendFile(__dirname + "/failure.html")
    }
    response.on("data", function(data){
        console.log(JSON.parse(data));
    })
});
request.write(jsonData);
request.end();
});

app.listen(3000, () => {
    console.log("Slucham na porcie 3000");
})

