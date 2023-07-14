const bcrypt = require("bcryptjs");
const validate = require("../../validation/register");
const db = require("../../models");
const jwt = require("jsonwebtoken");

// POST Register Route
const register = (req, res) => {
  const { errors, notValid } = validate(req.body);

  // Validate Form Data
  if (notValid) {
    return res.status(400).json({ status: 400, errors });
  }

  // Verify Account Does Not Already Exist
  db.User.findOne({ email: req.body.email }, (err, foundUser) => {
    if (err)
      return res.status(500).json({
        status: 500,
        message: "Something went wrong. Please try again"
      });

    if (foundUser)
      return res.status(400).json({
        status: 400,
        message: "Email address has already been registered. Please try again"
      });

    // Generate Salt (Asynchronous callback version)
    bcrypt.genSalt(10, (err, salt) => {
      if (err)
        return res.status(500).json({
          status: 500,
          message: "Generate Salt failed. Please try again"
        });

      // Hash User Password
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err)
          return res.status(500).json({
            status: 500,
            message: "Hash User Password failed. Please try again"
          });

        const newUser = {
          username: req.body.username,
          email: req.body.email,
          password: hash
        };

        db.User.create(newUser, (err, savedUser) => {
          if (err) return res.status(500).json({ status: 500, message: err });
          console.log('Success! savedUser: ', savedUser);
          res.status(201).json({ status: 201, message: "success" });
        });
      });
    });
  });
};


// POST Login Route
const login = (req, res) => {
  const { email, password } = req.body;

  console.log('incoming login attempt');
  console.log('email: ', email);
  console.log('password: ', password);


  // Validate email and password
  if (!email || !password) {
    console.log('missing inputs');
    return res.status(400).json({
      status: 400,
      message: "Please enter your email and password",
    });
  }

  // Find the user account
  db.User.findOne({ email })
    .select("+password")
    .exec((err, foundUser) => {
      if (err) {
        return res.status(500).json({
          status: 500,
          message: "An error occurred while finding the user. Please try again",
          err,
        });
      }

      if (!foundUser) {
        return res.status(400).json({
          status: 400,
          message: "Email or password is incorrect",
        });
      }

      // Compare passwords using bcrypt
      bcrypt.compare(password, foundUser.password, (err, isMatch) => {
        if (err) {
          return res.status(500).json({
            status: 500,
            message: "An error occurred while comparing passwords. Please try again",
            err,
          });
        }

        if (isMatch) {
          // Create a JSON Web Token (JWT)
          const user = {
            _id: foundUser._id,
          };

          jwt.sign(
            user,
            "waffles",
            {
              expiresIn: "1h",
            },
            (err, signedJwt) => {
              if (err) {
                return res.status(500).json({
                  status: 500,
                  message: "An error occurred while generating the JWT. Please try again",
                  err,
                });
              }
              console.log('no error in login, continue');
              return res.status(200).json({
                status: 200,
                message: "Login successful",
                id: foundUser._id,
                signedJwt,
              });
            }
          );
        } else {
          return res.status(400).json({
            status: 400,
            message: "Other email or password error encountered.",
          });
        }
      });
    });
};


module.exports = {
  register,
  login
};
