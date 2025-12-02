import express from "express";


const app=express()


app.get('/',(req,res)=>{
  res.send({status: 'server running'})
});


app.listen(prompt,()=>{
  console.log(`server running on ${port}`)
})