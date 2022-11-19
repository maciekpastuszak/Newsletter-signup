let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.get("/", (req, res) => {
    res.send("Jest ok");
});

app.listen(3000, () => {
    console.log("Slucham na porcie 3000");
})