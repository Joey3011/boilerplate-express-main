let express = require('express');
let app = express();






app.get("^/json", (req, res) => {
    res.json({ message: 'Hello json' })
})

app.use("/public", express.static(__dirname + "/public"))



app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

console.log("Hello world")





 module.exports = app;
