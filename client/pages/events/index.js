import React from "react";
import Calender from "../../components/Calender";

let currentUser = null;

export default function events() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mt-2 text-2xl">Calender of Events</h2>
      {currentUser && <h3>Create New Event</h3>}
      <Calender />
    </div>
  );
}
