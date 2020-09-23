import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BASE =
  "my-2 mx-2 p-2 rounded flex flex-col items-center shadow-md max-h-100";

export default function OfficerCard({ officer }) {
  const { name, years_of_service, rank, bio } = officer;

  return (
    <li className={rank ? `w-full` : "w-1/2 lg:w-1/3"}>
      <div className={rank ? `bg-yellow-400 ${BASE}` : `bg-red-400 ${BASE}`}>
        <div className="bg-gray-400 px-4 py-3 rounded-full m-2">
          <FontAwesomeIcon className="text-6xl" icon="user" />
        </div>
        <h5 className="font-bold text-lg">{name}</h5>
        <p className="text-md text-gray-100">
          <strong className="font-semibold">Years of Service:</strong>{" "}
          {years_of_service}
        </p>
        <p className="text-xs text-center h-12 m-2">{bio}</p>
      </div>
    </li>
  );
}
