var express = require("express");
var router = express.Router();  
var SubscriptionModel=require('./subscriptionModel')

router.post("/", (req, res, next) => {
     var subscriptionModel=new SubscriptionModel(
         req.body
    )
    console.log(subscriptionModel);
    
    subscriptionModel
    .save()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err);
    })
 
}); 
  
module.exports = router;
