let express = require('express')
let app = express();

app.get('/', function(req, res) {
    temp = Math.floor(Math.random() * 30)
    hum = Math.floor(Math.random() * 40) + 30
    res.json({ temp: temp, hum: hum})
})

app.listen(process.env.PORT || 3000);
module.exports = app;