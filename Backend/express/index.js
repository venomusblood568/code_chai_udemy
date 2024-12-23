import express from "express";
import logger from "./logger.js";
import morgan from "morgan";

const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());
const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);


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
