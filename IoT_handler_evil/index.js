
import express from 'express';
import got from 'got';
let app = express();

let temp = 0;
let enabled = false;

async function readTemperature() {
  if(enabled){
    try {
      const response = await got('http://temperature-sensor:3000/');//temperature-sensor
      let json = JSON.parse(response.body)
      temp = json.temp
      console.log("Got temp:" + String(temp))
    } catch (error) {
      console.log(error)
    }
  }
}

app.get('/temperature', function(req, res) {
  res.json({temp: temp})
  console.log("Request temp:" + String(temp))
})

app.get('/enable', function(req, res) {
  enabled = true;
  res.send("Evil IoT-handler enabled")
})

app.get('/disable', function(req, res) {
  enabled = false;
  res.send("Evil IoT-handler disabled")
})

setInterval(readTemperature, 10* 1000)
app.listen(process.env.PORT || 3001);