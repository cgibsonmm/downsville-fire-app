import React from "react";
import Link from "next/link";
import { EventsList } from "../helpers/eventsPlaceHolder";

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
          <li className="h-auto w-full md:w-1/2 lg:w-1/3 px-1 py-1">
            <div className="h-full w-full shadow-sm rounded-md flex p-3 border">
              <div className="w-1/3 h-full bg-red-600 flex-col flex items-center justify-between p-3 text-gray-100 rounded-lg">
                <div className="font-extrabold text-5xl">06</div>
                <div className="font-extrabold text-2xl">SEP</div>
              </div>
              <div className="pl-4 flex flex-col w-full overflow-hidden h-40">
                <div className="text-2xl font-bold">{event.title}</div>
                <p className="text-sm lg:text-xs xl:text-sm break-words h-auto md:truncate">
                  Vexillologist iceland fanny pack polaroid tattooed kinfolk
                  taxidermy sustainable letterpress tofu post-ironic chartreuse
                  chillwave ethical. Roof party master cleanse offal cloud bread
                  gastropub unicorn...
                </p>
                <button className="mt-1 p-1 border bg-gray-400 rounded-full self-end mt-auto">
                  Read More
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
