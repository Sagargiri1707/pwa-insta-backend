const mongoose = require("mongoose");
 
const SubSchema = mongoose.Schema(
  {
 
   }, { strict: false }
);
 
module.exports = mongoose.model("Subscriptions", SubSchema);
