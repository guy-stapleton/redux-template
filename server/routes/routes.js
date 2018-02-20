const express = require('express')
const server = require('../server')

const router = express.Router()


router.get('/', (req, res) => {
  res.json({"salutation": "Hello dear friend. I am JSON data from deleivered by the Server"})
})

module.exports = router
