import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownLinks from "./DropDownLinks";
import Cross from "../../assets/svg/cross.png";
import NavLink from "./NavLink";

import { useSelector } from "react-redux";

const Links = ["store", "test", "test", "test"];

export default function Navbar() {
  const { counter } = useSelector((state) => state);
  const [linksOpen, setLinksOpen] = useState(false);

  useEffect(() => {
    if (window) {
      window.addEventListener("resize", () => {
        if (window.innerWidth > 767 && linksOpen) {
          setLinksOpen(false);
        }
      });
    }
    return () => {
      window.removeEventListener("resize", null);
    };
  });

  const handleLinkClick = () => {
    setLinksOpen(false);
  };

  return (
    <>
      <header className="p-4 w-full bg-gray-400 border-b-2 border-black">
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
            {counter}
            <div className="md:hidden">
              <FontAwesomeIcon
                icon="bars"
                onClick={() => setLinksOpen(!linksOpen)}
              />
            </div>
            <div className="hidden md:block">
              <ul className="flex">
                {Links.map((link, index) => (
                  <NavLink
                    link={link}
                    key={`full-nav-link-${index}`}
                    handleLinkClick={() => null}
                  />
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
