
const mongoose =require('mongoose');
const { Schema } = mongoose;

const propertySchema = new Schema({
    propertyname: String,
    type: String,
    address: String,
    ammenties: String,
    contact: String,
    price: Number
});

mongoose.model("Property", propertySchema);