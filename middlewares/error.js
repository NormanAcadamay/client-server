const HandleError = (err,req,res,next)=>{
    // code body
    res.status(err.status || 500).json({message: err.message || 'Something Wrong!!!'});
}



module.exports = HandleError;