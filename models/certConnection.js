const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");

const url = "mongodb://<username>@localhost:27017/<database-name>";
const options = {
  ssl: true,
  sslValidate: true,
  sslCA: [fs.readFileSync("../certs/mongodb.crt")],
  sslCert: fs.readFileSync("../certs/mongodb.crt"),
  sslKey: fs.readFileSync("../certs/mongodb.key")
};

MongoClient.connect(url, options, (err, client) => {
  if (err) {
    console.error("Error connecting to MongoDB:", err);
  } else {
    console.log("Connected to MongoDB");
    // Use MongoDB here
    client.close();
  }
});