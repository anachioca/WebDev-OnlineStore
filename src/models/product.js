const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name:{
    type: String,
    required: true,
    trim: true
  },
  quant:{
    type: Number,
    required: true,
  },
  cat:{
    type: String,
    required: true,
    trim: true
  },
  price:{
    type: Number,
    required: true,
  },
  img:{
    type: String,

  },
  cuidados:{
    type: String,
  },
});

module.exports = mongoose.model('Product', schema);
