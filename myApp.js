require('dotenv').config()
let express = require('express');
let app = express();
const messageENV = process.env.MESSAGE_STYLE 

app.get("^/json", (req, res) => {
    var jsonResponse = { message : "Hello json" }
    if (messageENV === 'uppercase'){
        jsonResponse.message  = jsonResponse.message.toUpperCase()
    }
    res.json(jsonResponse)
})

app.use("/public", express.static(__dirname + "/public"))



app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

console.log("Hello world")





 module.exports = app;