import Cal from "../lib/calender";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CalenderDay from "./CalenderDay";

export default function Calender() {
  const Month = new Cal();
  const [month, setMonth] = useState(Month);

  const changeMonth = (num) => {
    let newTime = new Cal(month.moment.add(num, "month"));
    setMonth(newTime);
  };

  useEffect(() => {
    setMonth(month);
  }, [month]);

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="flex justify-center items-center">
        <button
          class="px-4 py-2 border-2 rounded-lg border-red-400"
          onClick={() => changeMonth(-1)}
        >
          <FontAwesomeIcon icon="caret-left" />
        </button>
        <h4 className="p-4 text-2xl">{month.month}</h4>
        <button
          className="px-4 py-2 border-2 rounded-lg border-red-400"
          onClick={() => changeMonth(+1)}
        >
          <FontAwesomeIcon icon="caret-right" />
        </button>
      </div>
      <div className="border m-2 flex flex-wrap">
        {month.squareMonth.map((i) => (
          <CalenderDay key={`day-${i.month}-${i.date}`} day={i} />
        ))}
      </div>
    </div>
  );
}
