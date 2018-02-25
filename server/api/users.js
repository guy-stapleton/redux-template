const express = require('express')
const db = require('../db/connection')
const router = express.Router()
const {getUsers} = require('../queries/users')


router.get('/', (req, res) => {
  getUsers(db)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.json(err.message)
    })
})

module.exports = router
