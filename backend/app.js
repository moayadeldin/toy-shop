let express = require('express');
let mongoose = require('mongoose');
let app = express();
var cors = require('cors');
let game=require('./model/games')


mongoose.connect("mongodb+srv://moayad:hgPgYmPCrLJot114@cluster0.bxhuqhs.mongodb.net/?retryWrites=true&w=majority",{

    useNewUrlParser:true
},function(error){

    if (error) {
        console.log(error);
    } else {
        console.log("Connected to Database");
    }
}
);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get('/games',function(req,res,next){
      game.find().then((data)=>{

        res.send(data)


      }).catch(err=>{


        console.log(err);

      })
})



app.listen(3000,function() {

  console.log('App is ready');

})
