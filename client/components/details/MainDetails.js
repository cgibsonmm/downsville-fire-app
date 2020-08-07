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
        <ul className="text-xl flex flex-wrap justify-start">
          <li className="relative text-red-500 mr-2 md:mr-4 my-2">
            <span className="ml-4 red-dot text-gray-900 font-semibold">
              Free Training
            </span>
          </li>
          <li className="relative text-red-500 mr-2 md:mr-4 my-2">
            <span className="ml-4 red-dot text-gray-900 font-semibold">
              Tax Cut
            </span>
          </li>
          <li className="relative text-red-500 mr-2 md:mr-4 my-2">
            <span className="ml-4 red-dot text-gray-900 font-semibold">
              Fire Code Inspections
            </span>
          </li>
        </ul>
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
