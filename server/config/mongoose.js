const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0/cats_db', {useNewUrlParser:true});

module.exports = mongoose