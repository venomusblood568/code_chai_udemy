import express from 'express';

const app = express();
const port = 3000;

app.get("/" , (req,res) =>{
    res.send("Hello express is working fine!!!")
})

app.get("/nodemon", (req, res) => {
  res.send("Nodemon is working just fine ");
});

app.listen(port,()=>{
    console.log(`Server is running at ${port}...`)
})