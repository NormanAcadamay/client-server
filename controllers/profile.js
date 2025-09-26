const renderError = require("../utils/randerError");



exports.createProfile = (req, res,next) => {
    try {
        // code body
        if (true){
            return renderError(401,'Token invalid')
        }
        console.log('Hello Create Profile')
        res.json({ message: "Hello Create Profile" });
    
    } catch (error) {
        console.log(error.message)
        next(error)
    }

}