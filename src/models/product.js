const mongoose = erquire('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name:{
    type: String,
    required: true,
    trim: true
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
  cat:{
    type: String,
    required: true,
    trim: true
  },
});

module.exports = mongoose.model('Product', schema);
