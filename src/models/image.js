const mongoose = require('mongoose');

// Schema defines how chat messages will be stored in MongoDB
const imageSchema = new mongoose.Schema({
 path: {
 type: String,
 required: true,
 trim: true
 },
 originalname: {
 type: String,
 required: true
 }

});

module.exports = mongoose.model('Image', imageSchema);
