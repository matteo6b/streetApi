const Artist = require('../models/artist');
const express = require('express');


exports.all = (req, res) => {

  Artist.find({})

  .populate('image')
     .exec()
     .then((artists) => {
       res.json(artists);
     })
     .catch((err) => {
       res.send('error occured');
     });

};

exports.findOne = (req,res) =>{
  Artist.findOne({
  _id: req.params.id
}).populate('image')
  .exec().then((artist) =>{
      res.json(artist)

  }).catch((err) => {
       res.send('error occured');
     });

};

exports.add = (req,res) =>{
  console.log(req.body)
  const artist = new Artist({
   name: req.body.name,
   firstName: req.body.firstName,
   lastName:req.body.lastName,
   age:req.body.age,
   info:req.body.info,
   type:req.body.type,
   image:req.body.image
 });
   artist.events.push(req.body.event)
 artist.save()
   .then(savedArtist => res.json(savedArtist))
   .catch(e => next(e));
};

exports.update = (req,res) =>{
  Artist.findOneAndUpdate({
  _id: req.params.id
  },
  { $set: { name: req.body.name }
}, {upsert: true}, (err, artist) => {
  if (err) {
    res.send(err);
  } else {

    res.send(artist);
}
})

}

exports.delete = (req,res) =>{
  Artist.findOneAndRemove({
  _id: req.params.id
}, (err, artist) => {
  if(err) {
    res.send(err)
  } else {
    console.log(artist);
    res.status(204);
}
})

}
