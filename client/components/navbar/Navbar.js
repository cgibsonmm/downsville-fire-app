import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownLinks from "./DropDownLinks";
import Cross from "../../assets/svg/cross.png";
import NavLink from "./NavLink";

const Links = ["Store", "Test", "Test", "Test"];

export default function Navbar() {
  const [linksOpen, setLinksOpen] = useState(false);

  const handleLinkClick = () => {
    setLinksOpen(false);
  };
  return (
    <>
      <header className="p-4 w-full bg-red-700 border-b-2 border-black">
        <nav>
          <div className="flex w-full justify-between items-center">
            <Link href="/">
              <div className="flex justify-center items-center">
                <img className="h-10" src={Cross} />
                <h3 className="text-xl font-bold">
                  Downsville Fire Department hello
                </h3>
              </div>
            </Link>
            <div className="md:hidden">
              <FontAwesomeIcon
                icon="bars"
                onClick={() => setLinksOpen(!linksOpen)}
              />
            </div>
            <div className="hidden md:block">
              <ul className="flex">
                {Links.map((link) => (
                  <NavLink link={link} handleLinkClick={() => null} />
                ))}
              </ul>
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
