const router = require("express").Router();
const apiController = require("../controller/apiController");

router.get("/project", apiController.showProject);
router.post("/contact", apiController.contact);

module.exports = router;