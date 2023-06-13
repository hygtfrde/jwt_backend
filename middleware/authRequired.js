const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
 console.log('init authRequired');

 let bearerHeader = req.headers["authorization"];
 console.log("bearerHeader ---> ", bearerHeader);

 if (bearerHeader) {
    const bearerToken = bearerHeader.split(" ")[1];
    let verified = jwt.verify(bearerToken, "waffles");
    console.log("Here's the verified token", verified);
    req.userId = verified._id;
    next();
  }
  else {
    res.status(403).send("Middlewar broke. No bearer token.");
  }
};
