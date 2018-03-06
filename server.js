const express = require('express')
const { Model } = require('objection')
const bodyParser = require('body-parser')
//Import ORM

const apiRouter = require('./src/routes/apiRouter.js')


const connectToDb = require('./src/database/dbConnect.js')
const dbConfigObj = require('./knexfile')

const app = express()


const appDb = connectToDb(dbConfigObj.development)
Model.knex(appDb)
app.locals.db = appDb


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/', apiRouter)


app.listen(3000, ()=>{
  console.log(`APP LISTENING ON ${3000}`)
})
