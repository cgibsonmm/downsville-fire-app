import Link from "next/link";
import moment from "moment";

const style = {
  bg: {
    background: `url(${require("./../assets/images/demo.jpg")}) no-repeat center center`,
    backgroundSize: "cover",
  },
};

export default function IndexEventCard({ event }) {
  const { title, description, startTime, endTime, id, date } = event;

  return (
    <li className="h-auto w-full md:w-1/2 lg:w-1/3 px-1 py-1">
      <div className="h-full w-full shadow rounded-md flex p-3 border">
        <div
          style={style.bg}
          className="w-1/3 lg:w-1/2 xl:w-1/3 h-full rounded-md"
        >
          <div className="h-full w-full bg-gray-900 bg-opacity-50 flex-col flex items-center justify-between p-3 text-gray-100 rounded-md">
            <div className="font-extrabold text-5xl">
              {moment(date).format("DD")}
            </div>
            <div className="font-extrabold text-2xl">
              {moment(date).format("MMMM")}
            </div>
            <div className="flex flex-col text-xs justify-center items-end">
              {startTime && <div>S: {startTime}</div>}
              {endTime && <div>E: {endTime}</div>}
              <p></p>
            </div>
          </div>
        </div>
        <div className="pl-4 flex flex-col w-full h-40">
          <div className="text-2xl font-bold">{title}</div>
          <p className="text-sm lg:text-xs xl:text-sm h-auto block-with-text mt-2">
            {description}
          </p>
          <Link href="/events/[title]" as={`/events/${id}`}>
            <button className="text-gray-100 mt-1 py-1 px-4 border bg-red-500 rounded-full self-end mt-auto hover:bg-gray-100 hover:text-red-500 hover:border-2 hover:border-red-500 focus:outline-none font-bold ">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </li>
  );
}
