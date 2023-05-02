const express=require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('chef is up')
  })
  app.listen(port, () => {
    console.log(`chef api listening on port ${port}`)
  })