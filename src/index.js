//<<<=====================Importing Module and Packages=====================>>>//
const express = require('express');
const route = require('./route/route');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json());

//===================== Make Relation Between MongoDb and Nodejs with MongoDb Cluster Link  =====================//
mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://vimsl1986:ps0IcsdgkWaM5070@cluster0.pw232ckf.mongodb.net/syngmeDEMO", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is Connected..."))
    .catch(error => console.log(error))

//===================== Global Middleware for All Route =====================//
app.use('/', route)

route.all("/*", function (req, res) {
    res.status(400).send({ status: false, message: "The api you request is not available" })
})

//===================== PORT =====================//
app.listen(process.env.PORT || 3000, function () {
    console.log('Express App Running on Port: ' + (process.env.PORT || 3000))
});

//<<<=======================================================================>>>//
