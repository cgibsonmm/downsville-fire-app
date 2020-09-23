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

  if (events.length < 1) {
    return <div className="flex text-3xl"></div>;
  }

  return (
    <div className="mt-10 flex flex-col items-center">
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
