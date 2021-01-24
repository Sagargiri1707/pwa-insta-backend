var express = require("express");
var router = express.Router();  
var postModel=require('./postModel')
var subscriptionModel=require('./subscriptionModel')
var webPush=require('web-push')
router.post("/", (req, res, next) => {
     var keys=Object.keys(req.body )[0]
    var newPost = new postModel(req.body);
     console.log('getting push');
      newPost
    .save()
    .then( async data=>{
        webPush.setVapidDetails(
            'mailto:sagargiri8846@gmail.com',
            'BL1a7NhacI24dK5D52jRu6LH3gOKhsorDCR8I8uZUa54CHIdrCJ8j7nZX5x0930TK_vnx2giOZ0CGQfsNwsmpwE',
             'XB4wtlA_DG1CdNTfFLChmpXWbLpzmUf2_KbH0au7EI0'
             )
             const subData= await subscriptionModel.find()
             return {subData,data}
             
            }).then(subscriptions=>{
                 console.log('------------------------------');
                 subscriptions.subData.forEach(sub => {
                     const subs=JSON.parse(JSON.stringify(sub));
                    
                      var pushConfig={
                        endpoint:subs.endpoint,
                        keys:{
                           auth:subs.keys.auth,
                            p256dh:subs.keys.p256dh
                        }
                    }

                  
                    webPush
                    .sendNotification(pushConfig,JSON.stringify({
                        title:"New post",
                        content:"New Post",
                        openUrl:"/help"
                    })
                    ).catch(err=>{
                        console.log(err);
                    })
                 });
               res.json({
                   id:req.body.id,
                   message:subscriptions.data
               })
            })
    .catch(err=>{
        console.log(err);
    })
}); 
 
router.get("/",(req,res,next)=>{
    postModel
    .find()
    .select('-_id -__v')
    .then(data=>{
        console.log(data);
        res.send(data)
    })
}) 
module.exports = router;
