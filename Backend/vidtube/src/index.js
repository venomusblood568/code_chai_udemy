import dotenv from "dotenv"
import{app} from "./app.js"
import connectdb from "./db/index.js"

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 8001

connectdb()
.then(() =>{
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) =>{
    console.log("Mongodb connection error",error)
})