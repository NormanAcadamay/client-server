exports.listCamping = (req, res) => {
  try {
    // code body
    console.log("Hello controller");
    // console.log(roitai);
    res.send("Hello controller");
  } catch (error) {
    console.log(error.massage);
    res.status(500).json({massage:'Server error'})
  }
};

exports.readCamping = (req , res) => {
  // code body
  try {
    
    res.send("Hello Read",roimai);
  } catch (error) {
    console.log(error.massage);
    res.status(500).json({massage:'Server error'})
  }
};

exports.createCamping = (req , res) => {
    try {
         // code body
         res.send("Hello Create");
    } catch (error) {
        console.log(error.massage);
        res.status(500).json({massage:'Server error'});
    }
 
}

exports.updateCamping = (req , res) => {
    try {
         // code body
         res.send("Hello Update");
    } catch (error) {
        console.log(error.massage);
        res.status(500).json({massage:'Server error'});
    }
 
}

exports.deleteCamping = (req , res) => {
    try {
         // code body
         res.send("Hello Delete");
    } catch (error) {
        console.log(error.massage);
        res.status(500).json({massage:'Server error'});
    }
 
}