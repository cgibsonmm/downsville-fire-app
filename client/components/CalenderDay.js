import Link from "next/link";

export default function CalenderDay({ day }) {
  return (
    <div className="w-1/7 h-20 border border-red-500 text-xs">
      <Link href={`/events/${day}`}>
        <div>{day}</div>
      </Link>
    </div>
  );
}
