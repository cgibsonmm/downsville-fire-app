const BASE = "my-2 mx-2 p-2 rounded flex flex-col items-center shadow-md h-100";

export default function OfficerCard({ officer }) {
  const { name, yos, rank } = officer;

  return (
    <li className={rank ? `w-full` : "w-1/2"}>
      <div className={rank ? `bg-yellow-400 ${BASE}` : `bg-red-400 ${BASE}`}>
        <h5 className="font-bold text-xl">{name}</h5>
        <p className="text-lg">Years of Service: {yos}</p>
      </div>
    </li>
  );
}
