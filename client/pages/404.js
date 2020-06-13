import Error from "../assets/images/404.jpeg";

import React from "react";

export default function EPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl">THIS IS FINE!</h2>
      <img className="w-1/2" src={Error} />
      <h3 className="text-2xl">Not really, 404!</h3>
    </div>
  );
}
