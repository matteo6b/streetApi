const Type = require('../models/types');
const express = require('express');

exports.all = (req, res) => {

  Type.find({})
     .exec()
     .then((types) => {
       res.json(types);
     })
     .catch((err) => {
       res.send(err);
     });

};

exports.findOne = (req,res) =>{
  Type.findOne({
  _id: req.params.id
  })
  .exec().then((type) =>{
      res.json(type)

  }).catch((err) => {
       res.send(err);
     });

};

exports.add = (req,res) =>{
  const type = new Type({
   name: req.body.name,
 });
    //type.push(req.body.type)
 type.save()
   .then(savedType => res.json(savedType))
   .catch(e => next(e));
};

exports.update = (req,res) =>{
  Type.findOneAndUpdate({
  _id: req.params.id
  },
  { $set: { name: req.body.name }
}, {upsert: true}, (err, type) => {
  if (err) {
    res.send(err);
  } else {

    res.send(type);
}
})

}

exports.delete = (req,res) =>{
  Type.findOneAndRemove({
  _id: req.params.id
}, (err, type) => {
  if(err) {
    res.send(err)
  } else {
    console.log(type);
    res.status(204);
}
})

}
