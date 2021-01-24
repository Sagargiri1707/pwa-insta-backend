const mongoose = require("mongoose");
 
const postSchema = mongoose.Schema(
  {
 
   }, { strict: false }
);
 
module.exports = mongoose.model("Posts", postSchema);
