require('dotenv').config()
let express = require('express');
let app = express();
let bodyParser = require('body-parser')


console.log("Hello world")

app.use("/public", express.static(__dirname + "/public"))

app.use(bodyParser.urlencoded( { extended: false } ) )


app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get("^/json", (req, res) => {
    var jsonResponse = { message : "Hello json" }
    if (process.env.MESSAGE_STYLE  === 'uppercase'){
        jsonResponse.message  = jsonResponse.message.toUpperCase()
    }
    res.json(jsonResponse)
})

app.get('/name', (req, res) => {
   res.json({name: req.query.first + " " + req.query.last})
})

app.get('/:word/echo', (req, res) => {
    res.json({echo: req.params.word})
})

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

app.post("/name", (req, res) => {
    console.log(req.body.first + " " + req.body.last)
    res.json({name: req.body.first + " " + req.body.last})
})













 module.exports = app;