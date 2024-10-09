import express  from "express";
import mongoose from "mongoose";

const app =express();
const port= 3000;

app.get('/', (req, res) => {
    res.send({ message: 'Hello from Express with TypeScript!' });
  });
  
  mongoose.connect("mongodb://localhost:27017").then(() =>{
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((e)=>{
    console.error(e); 
})

