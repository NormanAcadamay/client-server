exports. authCheck =(req,res,next)=>{
    // code body
    try {
        console.log("Hello Middleware");
        if (true){
            next();

        }else{
            res.status(401).json({massage:'No access Denied!!'});
        }
        
    } catch (error) {
        console.log(error);
    }
    
}