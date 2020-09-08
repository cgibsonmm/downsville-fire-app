import React, { useEffect, useState } from "react";
import OfficerCard from "./OfficerCard";
// import { getOfficers } from "../helpers/";

export default function LineOfficers() {
  const [officers, setOfficers] = useState([
    { title: "Chief", name: "James Smith", yos: 10, rank: "Chief" },
    {
      title: "Second Assistant Chief",
      name: "Red Foremen",
      yos: 16,
      rank: false,
    },
    { title: "LT.", name: "Clint John", yos: 14, rank: false },
  ]);

  const makeApiCall = async () => {
    // let data = await getOfficers();
    // setOfficers(data);
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  return (
    <div className="flex flex-col w-screen items-center mt-10">
      <h3 className="poppins-heavy text-2xl underline cursor-pointer">
        LINE OFFICERS
      </h3>
      <ul className="flex flex-wrap sm:w-full md:w-3/4">
        {officers.map((officer, id) => {
          return <OfficerCard officer={officer} key={`officer-card-${id}`} />;
        })}
      </ul>
    </div>
  );
}
