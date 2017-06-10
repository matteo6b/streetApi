const Event = require('../models/event');
const express = require('express');


exports.all = (req, res) => {

  Event.find({})
  .populate('type')
  .populate('image')
     .exec()
     .then((events) => {
       res.json(events);
     })
     .catch((err) => {
       res.send('error occured');
     });

};

exports.findOne = (req,res) =>{
  Event.findOne({
  _id: req.params.id
}).populate('type').populate('image')
  .exec().then((event) =>{
      res.json(event)

  }).catch((err) => {
       res.send('error occured');
     });

};

exports.add = (req,res) =>{
  console.log(req.body)
  const event = new Event({
   name: req.body.name,
   address: req.body.address,
   lat:req.body.lat,
   lng:req.body.lng,
   type:req.body.type,
   image:req.body.image
 });
  //  event.types.push(req.body.type)
 event.save()
   .then(savedEvent => res.json(savedEvent))
   .catch(e => next(e));
};

exports.update = (req,res) =>{
  Event.findOneAndUpdate({
  _id: req.params.id
  },
  { $set: { name: req.body.name }
}, {upsert: true}, (err, event) => {
  if (err) {
    res.send(err);
  } else {

    res.send(event);
}
})

}

exports.delete = (req,res) =>{
  Event.findOneAndRemove({
  _id: req.params.id
}, (err, event) => {
  if(err) {
    res.send(err)
  } else {
    console.log(event);
    res.status(204);
}
})

}
