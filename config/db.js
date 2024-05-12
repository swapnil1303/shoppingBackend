const mongoose = require("mongoose")


async function connectDB(){
    try{
        await mongoose.connect("mongodb+srv://swapnilmakwana4:snj9Kdwl8mlmOvUt@firstone.pql6sso.mongodb.net/?retryWrites=true&w=majority&appName=firstOne")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB
