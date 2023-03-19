const express= require('express')
const app = express()
const bodyParser = require('body-parser');
const  message = require("./model/message");
const  News = require("./model/News");
var cors = require('cors')
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


app.get('/',(req,res)=>{
res.send("Testing API")
})
//---------------------------------------message--------------------------------
app.use(bodyParser.json())
app.post('/message', (req, res,next) => {
   message.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
        
      }
    })  
  });
//---------------------------------------add news--------------------------------

app.use(bodyParser.json())
app.post('/save', (req, res,next) => {
  News.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
      
    }
  }) 
  });


   // -----------------Select all news------------------------
app.get('/list_news', (req, res, next) => {
  News.find((err, data) => {
      if (err) return next(err);
      if(!data) return res.status(404).send('Data not found');
      res.json(data);
  });
});


//-------------Details-----------

app.get('/news/:id', (req, res) => {
  const id =req.params.id;
  News.findById(id, function(err, data) {
    if (err) {
      return res.send(err);
    }
else{
  res.json(data);
}  
});
});


//--------------------Delete---------------------

app.post('/supp', (req, res ) => {
  News.deleteOne({_id: req.body.id}).then(
    () => {
      res.status(200).json({
        msg: data
      })
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});
//-----------------------------------Edit---------------------
app.post('/edit', (req, res, next) => {
  const news = new News({
    _id: req.body.id,
    title:req.body.title,
    summarized:req.body.summarized ,
     Detail:req.body.Detail,
     dateofnews:req.body.dateofnews,
     category:req.body.category,
     website:req.body.website,
     img: req.body.img,
  });
  News.updateOne({_id: req.body.id}, news).then(
    () => {
      console.log("Edited!")
      res.json(news)
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}); 

//-------------------category---------------

app.get('/Clubs', (req, res) => {
  News.find({category:'clubs'}, function(err, data) {
    console.log("clubs!")
    res.json(data)
  })})

app.get('/Compus', (req, res) => {
    News.find({category:'compus'}, function(err, data) {
      console.log("compus!")
      res.json(data)
    })})

app.get('/Education', (req, res) => {
      News.find({category:'education'}, function(err, data) {
        console.log("Education!")
        res.json(data)
      })})
app.listen(5000,()=>{
console.log("Server started and running on port 5000")
})
