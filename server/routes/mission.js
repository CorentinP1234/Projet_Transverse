const express = require('express')
const router = express.Router();
const auth = require("../auth.js");

// Login Middleware
router.use(async (req, res, next) => {
  let isLoggedIn = await auth.isLoggedIn(req, res)
  if (isLoggedIn) {
    next()
  } else {
    res.status(403).send("Access denied")
  }
})



mudule.exports = router;