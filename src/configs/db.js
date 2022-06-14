let mongoose = require("mongoose");
let connect = ()=>{
    return mongoose.connect("mongodb+srv://shakti:shakti@cluster0.7woik.mongodb.net/?retryWrites=true&w=majority")
}
//mongodb+srv://Divya-Pidugu:<password>@cluster0.9tbkn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
module.exports = connect;