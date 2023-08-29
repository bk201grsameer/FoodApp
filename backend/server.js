const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
const { connectToDb } = require("./model/db");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

dotenv.config();
connectToDb();

app.use(express.json());
app.use("/api/pizza", require("./routes/pizzaRoute"));
app.use("/api/user", require("./routes/UserRoute"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
