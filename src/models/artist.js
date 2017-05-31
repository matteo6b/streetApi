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
     type:{
       type:String
     }
  events:[{ type: Schema.Types.ObjectId, ref: 'Event' }]
})

module.exports = mongoose.model('Artist', ArtistSchema);
