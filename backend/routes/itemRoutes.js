const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const item = require("../controllers/itemController");

router.post("/", authMiddleware, item.createItem);
router.get("/", item.getItems);
router.put("/:id", authMiddleware, item.updateItem);
router.delete("/:id", authMiddleware, item.deleteItem);

module.exports = router;
