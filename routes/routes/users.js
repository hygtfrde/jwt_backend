const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers");
const authRequired = require("../../middleware/authRequired");

router.get("/", authRequired, ctrl.users.findUserById);
router.put("/", authRequired, ctrl.users.updateSigninDate);


module.exports = router;
