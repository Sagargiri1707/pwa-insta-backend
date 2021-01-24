var express = require("express");
var mongoose=require('mongoose')

var app = express();
app.use(express.json())
var cors = require("cors");
app.use(cors());

mongoose.connect(`mongodb+srv://sagar:sagar@cluster0.56meo.mongodb.net/sagar?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  mongoose.connection.on("open", () => {
    console.log("database connected successfully");
  });
  
  app.use("/posts", require("./posts"));
  app.use("/subscriptions", require("./subscriptions"));
 
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
