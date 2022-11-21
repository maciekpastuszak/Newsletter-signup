let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const e = require('express');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req,res) => {
var fName = req.body.fName;
var lName = req.body.lName;
var email = req.body.email;
console.log(fName, lName, email);
})

app.listen(3000, () => {
    console.log("Slucham na porcie 3000");
})