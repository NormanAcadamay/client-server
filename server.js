const express = require("express");
const cors = require("cors");
const app = express();
const campingRoute = require("./routes/camping");

// middlewere
app.use(cors());
app.use(express.json()); // req.body

// Method GET,POST, PUT,PATCH, DELETE


app.use("/api", campingRoute);
// app.get('/',(req,res)=>{
//   res.json({message:"Hello,"})
// })

const PORT = 5001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
