const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-double')(mongoose);
const SchemaTypes = mongoose.Schema.Types;
// Schema defines how the user's data will be stored in MongoDB
const EventSchema = new mongoose.Schema({

      name:{
        type:String,
      },
      address:{
        type:String,
      },
      image:{
        type:String,
      },
      lat:{
        type: SchemaTypes.Double,
      },
      lng:{
        type: SchemaTypes.Double,
      },
      type : { type: Schema.Types.ObjectId, ref: 'Type' },
      image : { type: Schema.Types.ObjectId, ref: 'Image' }

})

module.exports = mongoose.model('Event', EventSchema);
