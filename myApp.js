let express = require('express');
let app = express();



app.use(express.static(__dirname + '/public'))

app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

console.log("Hello world")





 module.exports = app;
