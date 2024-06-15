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

module.exports = {postData,getData}