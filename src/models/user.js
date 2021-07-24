const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name:{
    type: String,
    required: true,
    trim: true
  },
  lastname:{
    type: String,
    required: true,
    trim: true
  },
  phone:{
    type: String,
    required: true,
    trim: true
  },
  email:{
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password:{
    type: String,
    required: true,
    trim: true
  },
  country:{
    type: String,
    required: true,
    trim: true
  },
  city:{
    type: String,
    required: true,
    trim: true
  },
  uf:{
    type: String,
    required: true,
    trim: true
  },
  adress:{
    type: String,
    required: true,
    trim: true
  },
  num:{
    type: Number,
    required: true,
  },
  comp:{
    type: String,
    trim: true
  },
  perm:{
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('User', schema);
