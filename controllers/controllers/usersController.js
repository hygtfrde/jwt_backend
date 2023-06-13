const db = require("../../models");

const findUserById = (req, res) => {
  // user by id found from token
  db.User.findById(req.userId, { password: 0, __v: 0 }, (err, foundUser) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        message: "ERROR 500: cannot find user by that id"
      })
    }
    return res.status(200).json({
      status: 200,
      data: foundUser
    })
  })
};

const updateSigninDate = (req, res) => {
  console.log('UPDATING SIGNIN DATE')
  // Prepare the update objects
  const update = { $set: { last_signin_date: new Date() } };
  const filter = { _id: req.userId };

  db.User.updateOne(filter, update, (err, updatedUser) => {
    if (err) {
      console.error('error in updateOne: ', err)
      return res.status(500).json({
        status: 500,
        message: "ERROR 500: cannot update user by that id"
      });
    }
    return res.status(200).json({
      status: 200,
      data: updatedUser
    });
  });
};

module.exports = {
  findUserById,
  updateSigninDate
};
