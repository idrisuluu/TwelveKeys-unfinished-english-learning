const mongoose = require('mongoose');
const DB_URL = "mongodb+srv://root:toor123@cluster0.brvvnrm.mongodb.net/app";


const DB_CONNECT = async() => {
    try{
        mongoose.connect(DB_URL)
        .then(response => console.log(`Mongo db connection succes!!`));
    }catch(err){
        console.log(`Db connection error -> ${err}`);
    }
}
module.exports = DB_CONNECT;