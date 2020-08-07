import api from "../apiHelpers/apiConfig";
import moment from "moment";
export const getAllEvents = async () => {
  try {
    let events = await api("/events");
    return events.data;
  } catch (e) {
    throw e;
  }
};

export const getEventById = async (id) => {
  try {
    let event = await api(`/events/${id}`);
    return event.data;
  } catch (e) {
    throw e;
  }
};

export const createEvent = async (event) => {
  try {
    let createdEvent = await api.post("/events", { event: event });
    return createdEvent.data.id;
  } catch (e) {
    throw e;
  }
};
