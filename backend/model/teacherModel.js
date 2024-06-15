const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    Name:{
        type:String,
    },
    Salary:{
        type:Number,
    },
    Email:{
        type:String,
    },
    Phone:{
        type:Number,
    },
});


module.exports = mongoose.model("teacher", teacherSchema);