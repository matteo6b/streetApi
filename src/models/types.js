const mongoose = require('mongoose');


// Schema defines how the user's data will be stored in MongoDB
const TypeSchema = new mongoose.Schema({
      name:{
        type:String,
      },

})

module.exports = mongoose.model('Type', TypeSchema);
