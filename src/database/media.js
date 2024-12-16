const Media = require('./models/mediaModel');

const createMedia = (mediaData) => {
  const newMedia = new Media(mediaData);
  return newMedia.save();
};

module.exports = {
  createMedia,
};
