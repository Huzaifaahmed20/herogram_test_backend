const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  path: { type: String, required: true },
  type: { type: String, required: true },
  tags: { type: Array, required: true },
});

const mediaModel = mongoose.model('Media', mediaSchema);

module.exports = mediaModel;
