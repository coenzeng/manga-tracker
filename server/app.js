const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//allow corss-origin requests
app.use(cors());

//allow .env varibles through process.env
require('dotenv').config({path: '../.env'})

//connect to the mongo atlas database
mongoose.connect(
  `mongodb+srv://<user>:$<pass>$@graphql-test.dzn6i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS
  }
);
mongoose.connection.once("open", () => {
  console.log("Connected to mongoDB database");
});
//middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Now listening for requests on port ${PORT}`);
});
