const Post = require('../models/Post');

module.exports = {
  async index(req, res) {
    
  },

  async store(req, res) {
    const { author, place, description, hashtags } = req.body;
    const {filename: image } = req.file;

    // 36:13 https://www.youtube.com/watch?time_continue=1&v=yEceeW3Uh70

    return res.json({ ok: true });
  }
}