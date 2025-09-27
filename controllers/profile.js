const renderError = require("../utils/randerError");

exports.createProfile = (req, res, next) => {
  try {
    // code body
    const { firstname, lastname } = req.body;
    console.log(req.headers.autorization);
    console.log(firstname, lastname);
    console.log("Hello Create Profile");
    res.json({ message: "Hello Create Profile" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
