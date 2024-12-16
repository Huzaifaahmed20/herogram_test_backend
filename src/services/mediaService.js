const mongoose = require('mongoose');
const Media = require('../database/media');

const createMedia = async (mediaData) => {
  mediaData['_id'] = new mongoose.Types.ObjectId();
  return Media.createMedia(mediaData);
};

module.exports = {
  createMedia,
};
