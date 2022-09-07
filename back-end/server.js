const express = require("express");

const app = express();

var bodyParser = require("body-parser");
var cors = require('cors');

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

const PORT = process.env.PORT || 3301;


app.use(cors())

const client = require('mongoose')

//Mongo db connection
const uri =
  "mongodb+srv://nikhil2297:nikhil020297@cluster0.ivuqnzn.mongodb.net/FoodDeliverySystem?retryWrites=true&w=majority";

async function run() {
  try {
    await client.connect(uri, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    });
    console.log("Connected successfully to server");
  }catch(err){
    console.log('Error connecting to server : ', err)
  }
}
run().catch(console.dir);

require("./app/routes/web-router")(app);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
