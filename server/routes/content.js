const express = require("express");
const {
  getContent,
  addContent,
  updateContent,
  getContentById,
} = require("../controllers/content");
const router = express.Router();

router.get("/content", getContent);
router.get("/content/:contentId", getContentById);

router.post("/content/add", addContent);

router.put("/content/update/:contentId", updateContent);

module.exports = router;
