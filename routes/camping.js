const express = require("express");
const router = express.Router();

// Controllers
const { listCamping, readCamping , createCamping , updateCamping ,deleteCamping} = require("../controllers/camping");

const { authCheck } = require("../middlewares/auth");

// ENDPOINT http://localhost:5001/api/camping
// @Method GET [List CAMPING]
// @ACCESS PUBLIC
router.get("/camping",authCheck, listCamping);

// ENDPOINT http://localhost:5001/api/camping/5
// @Method GET [Read CAMPING]
// @ACCESS PUBLIC
router.get("/camping/:id", readCamping);

// ENDPOINT http://localhost:5001/api/camping
// @Method POST [CREATE CAMPING]
// @ACCESS PRIVATE
router.post("/camping", createCamping);

// ENDPOINT http://localhost:5001/api/camping
// @Method PUT [EDIT CAMPING]
// @ACCESS PRIVATE
router.put("/camping/:id", updateCamping);

// ENDPOINT http://localhost:5001/api/camping/1
// @Method DELETE [delete camping]
// @ACCESS PRIVATE
router.delete("/camping/:id", deleteCamping);



//  export router ออกไป
module.exports = router;
