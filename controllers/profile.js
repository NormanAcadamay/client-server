const renderError = require("../utils/randerError");



exports.createProfile = (req, res,next) => {
    try {
        // code body
        const {firstname, lastname,clerkid} = req.body
        if(true){
            return renderError(res, 400, "ไปกินกาแฟก่อนนะ")
        }
        
  
        console.log(firstname, lastname,clerkid)
        console.log('Hello Create Profile')
        res.json({ message: "Hello Create Profile" });
    
    } catch (error) {
        console.log(error.message)
        next(error)
    }

}