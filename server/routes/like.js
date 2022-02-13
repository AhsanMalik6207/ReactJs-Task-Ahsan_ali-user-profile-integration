const express = require("express"),
  router = express.Router();
const Controller = require("../controllers/like");
const checkAuthMiddleware = require('../middleware/check-auth');

router.post("/:userId/:postId/like", checkAuthMiddleware.checkAuth,Controller.like);
router.delete("/:likeId/unlike", checkAuthMiddleware.checkAuth,Controller.unlike);
module.exports = router;
