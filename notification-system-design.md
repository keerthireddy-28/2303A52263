# Notification System Design

## Overview

The Notification System is designed to deliver and manage notifications for users efficiently. The system supports notification retrieval, filtering, marking notifications as read, and deleting notifications.

---

## Architecture

### Frontend

* React.js
* Axios for API communication
* Component-based UI

### Backend

* Node.js
* Express.js
* REST API architecture

### Logging Middleware

* Custom reusable logging utility
* Captures API events and application actions
* Sends logs to the evaluation logging service

---

## API Design

### Get All Notifications

```http
GET /api/notifications
```

Response:

```json
[
  {
    "id": "1",
    "type": "Placement",
    "message": "Microsoft hiring drive announced",
    "isRead": false
  }
]
```

---

### Get Notification By ID

```http
GET /api/notifications/:id
```

---

### Mark Notification As Read

```http
PATCH /api/notifications/:id/read
```

---

### Delete Notification

```http
DELETE /api/notifications/:id
```

---

## Database Schema

### Notifications Table

| Field     | Type      |
| --------- | --------- |
| id        | UUID      |
| userId    | UUID      |
| type      | VARCHAR   |
| message   | TEXT      |
| isRead    | BOOLEAN   |
| createdAt | TIMESTAMP |

---

## Query Optimization

* Index on userId
* Index on createdAt
* Pagination support
* Select only required fields

Example:

```sql
SELECT id, type, message, isRead
FROM notifications
WHERE userId = ?
ORDER BY createdAt DESC;
```

---

## Redis Caching

Redis is used to:

* Cache frequently accessed notifications
* Reduce database load
* Improve response time

Cache Key:

```txt
notifications:userId
```

---

## Scalability

### Horizontal Scaling

* Multiple backend instances
* Load balancer distribution

### Database Scaling

* Read replicas
* Connection pooling

### Queue Processing

* Message queue for notification delivery
* Asynchronous processing

---

## Priority Inbox Algorithm

Notifications are assigned priority scores.

Priority Formula:

```txt
Priority Score =
Importance + Recency + User Preference
```

Example:

| Type      | Priority |
| --------- | -------- |
| Security  | High     |
| Placement | High     |
| Event     | Medium   |
| General   | Low      |

Notifications are sorted in descending priority order before display.

---

## Security

* Input validation
* API error handling
* Secure authentication tokens
* Environment variables for secrets

---

## Future Enhancements

* Push notifications
* Email notifications
* SMS notifications
* Real-time updates using WebSockets
* User notification preferences

---

## Conclusion

The Notification System provides a scalable and maintainable architecture for managing notifications while ensuring performance, reliability, and extensibility.
