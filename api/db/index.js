const mongoose = require('mongoose');
const URL = "mongodb+srv://dbUser:dbpassword@cluster0.gkjaq.mongodb.net/rentaroom?retryWrites=true&w=majority"
const parameters = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(URL,parameters)
.then(()=>{
    console.log("connected to database");
})
.catch ((err)=>{
    console.log(`Error connecting to database \n${err}`);
})