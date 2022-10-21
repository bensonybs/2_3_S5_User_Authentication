const express = require('express')
const router = express.Router()
const users = require
router.get('/', (req, res) => {
  res.render('login')
})


module.exports = router