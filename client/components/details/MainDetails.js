import React from "react";
import DetailCard from "./DetailCard";
import { details } from "../../helpers/details";

export default function MainDetails() {
  return (
    <div className="flex flex-wrap">
      {/* Left */}
      <div className="w-full md:w-1/2 p-4">
        <div className="text-lg  font-semibold text-red-600">
          Building A Safer Community
        </div>
        <div className="text-4xl font-bold">
          Get out quick, before the smoke gets thick!
        </div>
        <div className="my-3 text-lg">
          The Department of Fire and Emergency Services was established on 1
          November 2012 and performs a critical role coordinating emergency
          services for a range of natural disasters and emergency incidents
          threatening life and property. It comprises more than 1600 operational
          personnel and corporate staff members. Eaque ipsa quae ab illo
          inventore veritatis.
        </div>
      </div>
      {/* Right */}
      <div className="w-full p-4 md:w-1/2 flex flex-wrap">
        {/* card */}
        {details.map((item, id) => (
          <DetailCard key={`detail-card-${id}`} item={item} />
        ))}
      </div>
    </div>
  );
}
