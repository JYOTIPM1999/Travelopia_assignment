const express = require("express");
const cors = require("cors");
const travellerRouter = require("./routes/travellers.routes");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // or set it to your domain
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use("/traveller", travellerRouter);

app.get("/", (req, res) => res.send("hello express"));

mongoose
  .connect(
    "mongodb+srv://jyotipm1999:jyotipm1999@cluster0.mcjqb4n.mongodb.net/test",
    // process.env.URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(
      // process.env.PORT
      8080,
      () => {
        console.log("server started on port 8080");
      }
    );
  });
