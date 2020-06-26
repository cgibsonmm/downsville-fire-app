import React, { useEffect, useState } from "react";
import Link from "next/link";
import { EventsList } from "../helpers/eventsPlaceHolder";
import IndexEventCard from "./IndexEventCard";

import { getAllEvents } from "../helpers/apiHelpers/apiEvents";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    let data = await getAllEvents();
    setEvents(data);
  };

  return (
    <div className="flex flex-col w-screen items-center mt-10">
      <Link href="/events">
        <h2 className="poppins-heavy text-2xl underline cursor-pointer">
          EVENTS
        </h2>
      </Link>
      <ul className="flex-wrap flex w-full mt-3">
        {events.map((event, index) => (
          <IndexEventCard event={event} key={`event-i-${index}`} />
        ))}
      </ul>
    </div>
  );
}
