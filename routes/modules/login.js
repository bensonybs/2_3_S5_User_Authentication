const e = require('express')
const express = require('express')
const router = express.Router()
const users = require('../../models/users.js')
router.route('/')
  .get((req, res) => {
    res.render('login')
  })
  .post((req, res) => {
    const { email, password } = req.body
    const validUser = users.find(user => user.email === email && user.password === password)
    if (validUser) {
      res.render('home', { validUser })
    } else {
      res.redirect('/')
    }
  })

module.exports = router