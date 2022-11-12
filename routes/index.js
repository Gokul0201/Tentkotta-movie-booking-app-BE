var express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();
const {Movie,Ticket} = require('../library/auth')
const {mongodb,MongoClient,dburl,dbname}= require('../dbConfig')
router.get('/',async(req,res)=>{
  res.send("Server Running Sucessfully")
})

/* GET home page. */
// router.post('/postmovie',async(req,res)=>{
//   let data = await Movie.insertone(req.body);
//   if(data){
//     res.status(201).json({
//       message:'Movie Created Successfully',
//       data
      

//   })
//   }
// })

const client = new MongoClient(dburl)
router.post('/postmovie',async(req, res, next) => {
  await client.connect();
  try {
  
    const db = await client.db(dbname);
    let users = await db.collection('movies').insertOne(req.body)
    
        res.send({
          statusCode: 200,
          message:"movie added successfully",
          users
        })
   
  } catch (error) {
    console.log(error)
    res.send({ 
      statusCode:500,
      message:"Internal Server Error",
      error
    })
  }
  finally{
    client.close()
  }
});


router.post('/postticket',async(req,res)=>{
  let data = await Ticket.create(req.body);
  if(data){
    res.status(201).json({
      message:'Ticket Booked Successfully',
      data,
  })
}
})

router.get('/tickets',async(req,res)=>{
  let data = await Ticket.find()
  res.send(data);
})


router.get('/movies',async(req,res)=>{
  let data = await Movie.find()
  res.send(data)
})



module.exports = router;
