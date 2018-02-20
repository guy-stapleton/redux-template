const express = require('express')
const server = require('../server')

const router = express.Router()


router.get('/', (req, res) => {
  res.json({"salutation": "Hello dear friend"})
})

module.exports = router
