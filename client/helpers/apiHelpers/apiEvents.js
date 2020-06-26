import api from "../apiHelpers/apiConfig";

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
