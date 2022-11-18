import  express  from "express";
import "dotenv/config";
import bodyParser from "body-parser";
// import route from "./routes/index";
import mongoose from "mongoose";
import index from "../src/routes/index";
import cors from "cors";

const App = express();
App.use(cors());
App.use(bodyParser.json());
App.use("/", index);

const database = process.env.DATABASE;
mongoose
.connect(database,{ useNewUrlParser:true,useUnifiedTopology:true,
})
.then (() =>{
    console.log("Database is well connected!");
});
 
const port = process.env.PORT || 2000;
App.listen (port,() =>{
    console.log (`server is running on port ${port}`)
}
)
export default App; 