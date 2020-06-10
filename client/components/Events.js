import React from "react";
import Link from "next/link";
import { EventsList } from "../helpers/eventsPlaceHolder";
import IndexEventCard from "./IndexEventCard";

export default function Events() {
  return (
    <div className="flex flex-col w-screen items-center mt-10">
      <Link href="/events">
        <h2 className="poppins-heavy text-2xl underline cursor-pointer">
          EVENTS
        </h2>
      </Link>
      <ul className="flex-wrap flex w-full mt-3">
        {EventsList.map((event, index) => (
          <IndexEventCard event={event} key={`event-i-${index}`} />
        ))}
      </ul>
    </div>
  );
}
