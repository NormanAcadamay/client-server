const express = require("express");
const router = express.Router();
// controller
const {createProfile} = require("../controllers/profile")

// @ENDPOINT: http://localhost:5001/api/profile
router.post('/profile', createProfile)






module.exports = router;