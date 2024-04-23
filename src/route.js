const express = require('express');
const db = require('./db');
const router = express.Router();

router.get('/sorry', (req, res) => {
  res.redirect('https://krfox.ru');
});

router.get('/krfox', (req, res) => {
  res.redirect('https://krfox.ru');
});

router.get('/:url', (req, res) => {
  if (db.getUrl(req.params.url)) res.redirect(db.getUrl(req.params.url));
  else res.redirect('/sorry');
});

module.exports = router;