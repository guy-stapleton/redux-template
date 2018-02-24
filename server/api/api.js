const express = require('express')
const server = require('../server')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({"msg": "All I Think About Now"})
})

module.exports = router
