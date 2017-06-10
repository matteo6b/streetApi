const Image = require('../models/image');
const express = require('express');

exports.add = (image,callback) =>{
  Image.create(image, callback);

};
