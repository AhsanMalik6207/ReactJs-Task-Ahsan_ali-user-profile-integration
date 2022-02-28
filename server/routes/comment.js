const express = require("express"),
  router = express.Router();
const Controller = require("../controllers/comment");
const checkAuthMiddleware = require('../middleware/check-auth');

router.get("/getAll", Controller.getAll);
router.get("/:id", Controller.getComments);
router.post("/:userId/:postId/create", Controller.create);
router.put("/:commentId/update",Controller.update);
router.delete("/:commentId/delete",Controller.delete);
module.exports = router;
