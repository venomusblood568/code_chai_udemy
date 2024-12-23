import express from "express";

const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

let teaData = [];
let nextId = 1;

//post method
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teaData.push(newTea);
  res.status(201).send(newTea);
});

//get method
app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});

//get with id
app.get('/teas/:id',(req,res) =>{
  /*
    t.id: ID of the current tea in the array.
    req.params.id: Value from the URL route parameter.
    parent(): Function (undefined in your code) is likely used to transform or validate the id.
    */
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if(!tea){
    return res.status(404).send('Tea not found');
  }else{
    res.send(200).send(tea);
  }
})

//update tea
app.put('/teas/:id',(req,res) =>{
    const tea = teaData.find((t) => t.id === parseInt(req.params.id));
    if (!tea) {
      return res.status(404).send("Tea not found");
    }
    const {name,price} = req.body
    tea.name = name;
    tea.price = price;
    return res.status(200).send("Tea updated");
})

//delete tea
app.delete('/teas/:id',(req,res) =>{
    const index = teaData.findIndex( t => t.id === parseInt(req.params.id));
    if(index === -1){
        return res.status(404).send("tea not found");
    }
    teaData.splice(index,1);
    return res.status(404).send("deleted");
})

app.listen(port, () => {
  console.log(`Server is running at ${port}...`);
});
