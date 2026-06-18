import axios from "axios";

const API = "http://localhost:5000/api/notifications";

export const getNotifications = () => axios.get(API);

export const markAsRead = (id) =>
  axios.patch(`${API}/${id}/read`);

export const deleteNotification = (id) =>
  axios.delete(`${API}/${id}`);
