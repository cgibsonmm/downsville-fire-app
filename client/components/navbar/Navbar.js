import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownLinks from "./DropDownLinks";
import Cross from "../../assets/svg/cross.png";

const Links = ["Store"];

export default function Navbar() {
  const [linksOpen, setLinksOpen] = useState(false);

  const handleLinkClick = () => {
    setLinksOpen(false);
  };
  return (
    <>
      <header className="p-4 bg-red-700 border-b-2 border-black">
        <nav>
          <div className="flex w-full justify-between items-center">
            <Link href="/">
              <div className="flex justify-center items-center">
                <img className="h-10" src={Cross} />
                <h3 className="text-xl font-bold">
                  Downsville Fire Department
                </h3>
              </div>
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
      {linksOpen && (
        <DropDownLinks links={Links} handleLinkClick={handleLinkClick} />
      )}
    </>
  );
}
