const express = require("express");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const todoRoute = require("./routes/todoRoutes.js");
// const userRoutes = require("./routes/user.js");
// const { MongoClient } = require("mongodb");

const app = express();

// Middlewares
// app.use(express.json());
// app.use(bodyParser.json({ limit: "50mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "100mb", extended: true, parameterLimit: 50000 }))
// app.use(cors());

// app.use(function (req, res, next) {
//   //Enabling CORS
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
//     next();
//   });
app.use("/todo", todoRoute);
// app.use("/user", userRoutes);


// cloud atlas mongodbs
const CONNECTION_URL =
  "mongodb+srv://pass1234:LrUvldh4nlQMGtfs@cluster0.5kncg.mongodb.net/BuildFastDB?retryWrites=true&w=majority&appName=Cluster0";

const PORT = 8080;
mongoose
  .connect(CONNECTION_URL)
  .then((result) =>
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
  )
  .catch(() => (err) => console.log(err.messsage));

app.get('/',(req,res)=>{
res.send('APP IS RUNNING')
})