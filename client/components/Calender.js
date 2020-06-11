import CalenderDay from "./CalenderDay";
let days = [...Array(31).keys()].map((i) => i + 1);

export default function Calender() {
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="flex">
        <button>{"<"}</button>
        <h4 className="p-4 text-2xl">MARCH</h4>
        <button>{">"}</button>
      </div>
      <div className="border m-2 flex flex-wrap">
        {days.map((i) => (
          <CalenderDay key={`day-${i}`} day={i} />
        ))}
      </div>
    </div>
  );
}
