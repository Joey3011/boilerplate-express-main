require('dotenv').config()
let express = require('express');
let app = express();


app.get('/now', (req, res, next) => {
    req.time = new Date().toString()
    next()
}, (req, res) => {
    res.json( {time: req.time} )
})


app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})

app.get("^/json", (req, res) => {
    var jsonResponse = { message : "Hello json" }
    if (process.env.MESSAGE_STYLE  === 'uppercase'){
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