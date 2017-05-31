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
      lat:{
        type: SchemaTypes.Double,
      },
      lng:{
        type: SchemaTypes.Double,
      },
      _creator:{ type: Number, ref: 'Artist' },
      types : [{ type: Schema.Types.ObjectId, ref: 'Type' }]


})

module.exports = mongoose.model('Event', EventSchema);
