
import express from 'express';
import got from 'got';
let app = express();

let temp = 0;

async function readTemperature() {
  try {
    let response = await got('http://temperature-sensor:3000/');//temperature-sensor
    let json = JSON.parse(response.body)
    temp = json.temp
    console.log("Got temp:" + String(temp))
  } catch (error) {
    console.log(error)
  }
}

app.get('/temperature', async function(req, res) {
  let response = await got('http://temperature-sensor:3000/');//temperature-sensor
  let json = JSON.parse(response.body)
  res.json({temp: json.temp})
  //console.log("Request temp:" + String(json.temp))
})

//setInterval(readTemperature, 10* 1000)
app.listen(process.env.PORT || 3001);