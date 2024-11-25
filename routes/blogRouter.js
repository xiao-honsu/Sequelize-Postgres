const router = require('express').Router();
const { init, showList, showDetails } = require("../controllers/blogController");

router.use("/", init)
router.get("/", showList);
router.get("/:id", showDetails);

module.exports = router;