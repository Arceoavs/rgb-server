
const express = require('express')
const randomColor = require("random-rgb-generator");
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const randomRgbString = randomColor()
  const formattedString = `0x${randomRgbString.substring(1)}`
  console.log(formattedString)
  res.send(formattedString)
})

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
