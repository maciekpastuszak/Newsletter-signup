let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(express.static("public"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.listen(3000, () => {
    console.log("Slucham na porcie 3000");
})