const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");

const {readdirSync} = require('fs');
const HandleError = require("./middlewares/error");

// const campingRoute = require("./routes/camping");
// const profileRoute = require("./routes/profile");




// middlewere
app.use(cors());
app.use(express.json()); // req.body
app.use(morgan('dev'))

// Method GET,POST, PUT,PATCH, DELETE

// console.log (readdirSync('./routes'))
readdirSync('./routes')
.map((r)=>app.use("/api", require('./routes/'+r)))


// app.use("/api", campingRoute);
// app.use("/api", profileRoute);
// app.get('/',(req,res)=>{
//   res.json({message:"Hello,"})
// })

app.use(HandleError);

const PORT = 5001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
