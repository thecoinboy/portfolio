import express from 'express'
import bodyParser from 'body-parser';
import { app } from './app.js'
import router from './app.js'



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/", router)


if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"))
}

app.listen(process.env.PORT | 5000, () => {
    console.log(`Server is running on: ${process.env.PORT}`)
})


  // "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"