const notifications = require("../data/notifications");

exports.getNotifications = (req, res) => {
  const { type } = req.query;

  if (type) {
    return res.json(
      notifications.filter(
        n => n.type.toLowerCase() === type.toLowerCase()
      )
    );
  }

  res.json(notifications);
};

exports.getNotificationById = (req, res) => {
  const notification = notifications.find(
    n => n.id === req.params.id
  );

  if (!notification) {
    return res.status(404).json({
      message: "Notification not found"
    });
  }

  res.json(notification);
};

exports.markAsRead = (req, res) => {
  const notification = notifications.find(
    n => n.id === req.params.id
  );

  if (!notification) {
    return res.status(404).json({
      message: "Notification not found"
    });
  }

  notification.isRead = true;
  res.json(notification);
};

exports.deleteNotification = (req, res) => {
  const index = notifications.findIndex(
    n => n.id === req.params.id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Notification not found"
    });
  }

  notifications.splice(index, 1);

  res.json({
    message: "Deleted successfully"
  });
};