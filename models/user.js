const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nick: {
    type: String,
    required: true
  },
  languages: Array,
  words: {
    _id: String,
    meaningId: String,
    firstTimeSeen: Boolean,
    score: Number
  }
});

module.exports = mongoose.model('User', userSchema);