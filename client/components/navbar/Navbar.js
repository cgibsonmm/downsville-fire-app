import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownLinks from "./DropDownLinks";

const Links = ["store", "store"];

export default function Navbar() {
  const [linksOpen, setLinksOpen] = useState(false);
  return (
    <>
      <header className="p-4 bg-gray-400 border-b-2 border-black">
        <nav>
          <div className="flex w-full justify-between">
            <Link href="/">
              <h1 className="text-xl font-bold">Downsville Fire Department</h1>
            </Link>
            <div>
              <FontAwesomeIcon
                icon="bars"
                onClick={() => setLinksOpen(!linksOpen)}
              />
            </div>
          </div>
        </nav>
      </header>
      {linksOpen && <DropDownLinks links={Links} />}
    </>
  );
}
