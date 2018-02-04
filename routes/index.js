const express = require('express'),
  router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'MusicList Alpha' })
})

module.exports = router
