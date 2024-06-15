//SERVER MAKING CODE
const express = require("express");
const app = express();
const port = 8080;

const cors = require("cors");
app.use("*",cors()); //it removes the cors error

app.use(express.json()); //it will help to read the data from the body


function postData(req,res){ // req=request(jo data frontend bhej rha h), res=response(isse hmlog data ya fer message frontend bhejte h)
    console.log(req.body);
    console.log("data", req.body.data)
    if(req.body.data==="amisha") 
        res.send("Are ye to Bhonda h");
    else if(req.body.data==="sattwik") 
        res.send("Are ye to Sattu h");
    else 
        res.send("Are ye to koi aur h");
}
function getData(req,res){
    res.send("Hello from Bhondalal Das")
}
app.post("/",postData);
app.get("/",getData);


app.listen(port,()=>{
    console.log(`server start at port no : ${port}`);
})

//how to run?
// type "node index.js" in terminal without " "
// or npm i nodemon --g , then type "nodemon index.js" in terminal without " "


