var express = require("express");
var app = express();

app.use(express.static("public.js"));

app.get("/", function(req, res){
   res.redirect("index.js");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
