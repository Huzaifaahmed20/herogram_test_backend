const mediaService = require('../services/mediaService');

const createMedia = (req, res) => {
  const { originalname, mimetype, path } = req.file;

  mediaService
    .createMedia({
      path: path,
      name: originalname,
      type: mimetype,
      tags: [],
    })
    .then((media) => {
      res.status(200).json({
        message: 'Media created successfully',
        media,
      });
    })
    .catch((error) => {
      const e = new Error('Media created failed');
      e.status = 400;
    });
};

module.exports = createMedia;
