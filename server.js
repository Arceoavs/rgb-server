
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('0x00ff')
})

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
