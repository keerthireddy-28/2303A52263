function NotificationCard({ notification }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{notification.type}</h3>
      <p>{notification.message}</p>
      <p>
        Status: {notification.isRead ? "Read" : "Unread"}
      </p>
    </div>
  );
}

export default NotificationCard;