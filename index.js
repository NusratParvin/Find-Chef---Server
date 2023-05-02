const express=require('express')
const app = express()
const port = 5000
var cors=require('cors')


const allChefs = require('./data/allRecipes.json')
const recipeDetails = require('./data/recipeDetails.json')

app.use(cors())

app.get('/allChefs', (req,res)=>{
    res.send(allChefs)
  })

  app.get('/chefRecipes', (req,res)=>{
    res.send(recipeDetails)
  })


app.get('/', (req, res) => {
    res.send('chef is up')
  })
  app.listen(port, () => {
    console.log(`chef api listening on port ${port}`)
  })