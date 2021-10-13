const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//allow corss-origin requests
app.use(cors());

//connect to the mongo atlas database
mongoose.connect(
  "mongodb+srv://coenzeng:Kingcozman1$@graphql-test.dzn6i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("connected to mongoDB database");
});
//middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(4000, () => {
  console.log(`Now listening for requests on port ${4000}`);
});
