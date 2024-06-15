const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    Name:{
        type:String,
    },
    Dept:{
        type:String,
    },
    Email:{
        type:String,
    },
    Phone:{
        type:Number,
    },
});


module.exports = mongoose.model("student", studentSchema);

