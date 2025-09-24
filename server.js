const express = require("express");
const cors = require("cors");
const app = express();

// middlewere
app.use(cors());

// Method GET,POST, PUT,PATCH, DELETE

app.length("/", (req, res) => {
  console.log("Hello Easy Backend");
  //res.send('Hello Easy Backend')
  const roitai = "easy backend";
  res.json({ roitai });
});

app.get("/camping", (req, res) => {
  res.send("Hello camping");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
