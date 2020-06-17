import Link from "next/link";

export default function CalenderDay({ day }) {
  return (
    <div className="w-1/7 h-20 border border-red-500 text-xs flex items-center justify-center">
      <Link href={`/events/${day.month}-${day.date}`}>
        <div
          className={day.current ? "text-red-600 font-bold" : "text-gray-700"}
        >
          {day.date}, {day.month}
        </div>
      </Link>
    </div>
  );
}
