const express = require("express");
const router = express.Router();

const {
  getNotifications,
  getNotificationById,
  markAsRead,
  deleteNotification
} = require("../controllers/notificationController");

router.get("/", getNotifications);
router.get("/:id", getNotificationById);
router.patch("/:id/read", markAsRead);
router.delete("/:id", deleteNotification);

module.exports = router;