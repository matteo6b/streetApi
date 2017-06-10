const mongoose = require('mongoose');


// Schema defines how the user's data will be stored in MongoDB
const ArtistSchema = new mongoose.Schema({

      name:{
        type:String,
      },
      firstName:{
        type:String,
      },
      lastName:{
        type:String,
      },
     age:{
       type:Number
     },
     info:{
       type:String
     },
  events:[{ type: Schema.Types.ObjectId, ref: 'Event' }],
  type : { type: Schema.Types.ObjectId, ref: 'Type' },
  image : { type: Schema.Types.ObjectId, ref: 'Image' }

})

module.exports = mongoose.model('Artist', ArtistSchema);
