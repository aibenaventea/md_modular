const mongoose = require('mongoose');


const CatSchema = new mongoose.Schema({
    breedCat: String,
    sizeCat: String,
    coatCat: String,
    colourCat: String
}, {timestamps:true});

const Cat = mongoose.model('Cat',CatSchema)

module.exports=Cat