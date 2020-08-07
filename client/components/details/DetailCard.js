import { useEffect } from "react";
export default function DetailCard({ item }) {
  const { icon } = item;

  return (
    <div className="mt-2 w-1/2">
      <img className="h-20 w-20" src={icon} />
      <div>
        <h5 className="text-xl my-2 font-semibold">Some text</h5>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ipsam dolor aperiam? Accusamus.
        </p>
      </div>
    </div>
  );
}
