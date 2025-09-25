const express = require("express");
const router = express.Router();

// ENDPOINT http://localhost:5001/api/camping
// @Method GET [List CAMPING]
// @ACCESS PUBLIC
router.get("/camping", (req, res) => {
    // code body
  res.send("Hello route");
});

// ENDPOINT http://localhost:5001/api/camping/5 
// @Method GET [Read CAMPING]
// @ACCESS PUBLIC
router.get("/camping/:id", (req, res) => {
    // code body
  res.send("Hello route");
});

// ENDPOINT http://localhost:5001/api/camping
// @Method POST [CREATE CAMPING]
// @ACCESS PRIVATE
router.post("/camping", (req, res) => {
    const {title,price} = req.body;
    console.log(title) ;
    console.log(price) ;
  res.send("Hello POST, camping");
});

// ENDPOINT http://localhost:5001/api/camping
// @Method PUT [EDIT CAMPING]
// @ACCESS PRIVATE
router.put("/camping/:id", (req, res) => {
    console.log(req.params.id);
  res.send("jukkru Edit PUT");
});

// ENDPOINT http://localhost:5001/api/camping/1
// @Method DELETE [delete camping]
// @ACCESS PRIVATE
router.delete("/camping/:id", (req, res) => {
    res.send('hello delete camping')
})

//  export router ออกไป
module.exports = router;
