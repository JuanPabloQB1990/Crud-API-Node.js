const express = require("express")
const router = require('./routes/routesUsers.js')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public",express.static(__dirname+"/public"));

app.set('view engine', 'ejs')
app.set('Views', '/views')

app.use("/users", router)

const port = process.env.PORT || 3001

app.listen(port,()=>{
    console.log(`escuchando el puerto ${port}`);
})