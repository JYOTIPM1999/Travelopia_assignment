const express = require("express");
const cors = require("cors");
const travellerRouter = require("./routes/travellers.routes");
const mongoose = require("mongoose");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/traveller", travellerRouter);

app.get("/", (req, res) => res.send("hello express"));

mongoose
  .connect(
    "mongodb+srv://jyotipm1999:jyotipm1999@cluster0.mcjqb4n.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(8080, () => {
      console.log("server started on port 8080");
    });
  });