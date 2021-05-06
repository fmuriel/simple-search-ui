const express = require("express");
const morgan = require("morgan");
const data = require("./data");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;

app.use(morgan("tiny"));

app.get("/api/products", (req, res) => {
  let filteredData = [];
  const productName = req.query.name.replace(/%20/g, " ").toUpperCase();

  filteredData = data.filter((itm) => {
    return itm.name.toUpperCase().includes(productName);
  });

  res.json(filteredData);
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
