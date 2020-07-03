import { useState } from "react";
import Router from "next/router";
import EventForm from "./EventForm";
import { createEvent } from "../../helpers/apiHelpers/apiEvents";

export default function newEvent() {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    description: "",
  });
  const [errors, setErrors] = useState([]);

  const handleInput = (e) => {
    let { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let createdEvent = await createEvent(event);
      Router.push(`/events/${createdEvent}`);
    } catch (e) {
      setErrors(e.response.data.error);
    }
  };

  return (
    <div className="flex flex-col items-center w-screen">
      <h3 className="text-2xl m-4">Create Event</h3>
      {errors.length > 0 &&
        errors.map((error) => (
          <p key={`event-error-${error}`} className="text-red-500 font-bold">
            * {error}
          </p>
        ))}
      <EventForm
        event={event}
        type={"Create"}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
