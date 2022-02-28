const express = require("express"),
  router = express.Router();
const Controller = require("../controllers/userprofile");
const checkAuthMiddleware = require('../middleware/check-auth');
const multer = require ("multer");
const { default: file } = require("babel-core/lib/transformation/file");
const req = require("express/lib/request");
const res = require("express/lib/response");
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, './images')},
    filename:(req, file, cb) =>{
      cb(null,Date.now() + '--' + file.originalname)
    }
});

const upload = multer({storage:fileStorageEngine,fileFilter: (req, file, cb) => {
  if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  }
}})

router.get('/getAll', Controller.getAll);
router.post("/:userId/create",upload.single('picture') ,Controller.create);
router.put("/:userprofileId/update",Controller.update);
router.delete("/:userprofileId/delete",checkAuthMiddleware.checkAuth ,Controller.delete);
module.exports = router;
