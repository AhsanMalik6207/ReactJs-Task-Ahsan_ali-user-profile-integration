const express = require("express"),
  router = express.Router();
const Controller = require("../controllers/user");

router.post("/:roleId/register", Controller.register);
router.post("/login",Controller.login);
router.post("/renewaccesstoken",Controller.renewaccesstoken);
router.put('/:userId/disable',Controller.disableUser)
module.exports = router;
