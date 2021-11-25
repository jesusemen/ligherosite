//jshint esversion:6

const express = require("express");
const app = express();
const res = require("express/lib/response");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://theartBakely20:theart20@cluster0.e36to.mongodb.net/clientsBD", {useNewUrlParser: true}, {useUnifiedTopology:true})

const webSchema = {
    firstname: String,
    lastname: String,
    company: String,
    phone: String,
    location: String,
    email: String,
    project: String,
    budget: String,
    jobtype: String,
    delivery: String,
    date: Date
}

const Web = mongoose.model("Web", webSchema);


app.get("/", function(req, res){
 res.sendFile(__dirname + "/index.html");
});

app.get("/web", function(req, res){
    res.sendFile(__dirname + "/web.html");
});

app.post("/web", function(req, res){
   let newWeb = new Web({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    company: req.body.company,
    location: req.body.location,
    project: req.body.project,
    phone: req.body.phone,
    email: req.body.email,
    budget: req.body.budget,
    jobtype: req.body.jobtype,
    delivery: req.body.delivery,
    date: req.body.date

   })
   newWeb.save();
   res.redirect("/");
    

});

app.get("/mobile", function(req, res){
    res.sendFile(__dirname + "/mobile.html");
});

app.post("/mobile", function(req, res){
   let newWeb = new Web({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    company: req.body.company,
    location: req.body.location,
    project: req.body.project,
    phone: req.body.phone,
    email: req.body.email,
    budget: req.body.budget,
    jobtype: req.body.jobtype,
    delivery: req.body.delivery,
    date: req.body.date

   })
   newWeb.save();
   res.redirect("/");
    

});
app.get("/design", function(req, res){
    res.sendFile(__dirname + "/design.html");
});

app.post("/design", function(req, res){
   let newWeb = new Web({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    company: req.body.company,
    location: req.body.location,
    project: req.body.project,
    phone: req.body.phone,
    email: req.body.email,
    budget: req.body.budget,
    jobtype: req.body.jobtype,
    delivery: req.body.delivery,
    date: req.body.date

   })
   newWeb.save();
   res.redirect("/");
    

});


app.get("/design", function(req, res){
    res.sendFile(__dirname + "/design.html");
});

// app.get("/design", function(req, res){
//     res.send("contact me: jesusemen@protonmail.com");
// });

// app.post("/design", function(req, res){
//     res.send("<ul> <li>Coffee</li>  <li>Code</li>  <li>beer</li></ul>")
// });

// app.get("/mobile", function(req, res){
//     res.send("contact me: jesusemen@protonmail.com");
// });

// app.post("/mobile", function(req, res){
//     res.send("<ul> <li>Coffee</li>  <li>Code</li>  <li>beer</li></ul>")
// });




app.listen(3000, function(){
console.log("server started on port 3000");

});