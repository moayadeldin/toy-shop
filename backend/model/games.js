let mongoose = require('mongoose');
var gameSchema = new mongoose.Schema({

  title:String,
  price:Number,
  Brand:String
  //img:String


})

module.exports=mongoose.model('Game',gameSchema)
