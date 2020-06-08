import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownLinks from "./DropDownLinks";
import Cross from "../../assets/svg/cross.png";
import NavLink from "./NavLink";

import { useSelector } from "react-redux";

const Links = ["Home", "Gallery", "Events", "Contact Us"];

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
      <header className="p-4 w-full bg-gray-800 border-b-2 border-black">
        <nav>
          <div className="flex w-full justify-between items-center">
            <Link href="/">
              <div className="flex">
                <img className="h-16" src={Cross} />
                <div className="flex flex-col justify-center h-auto">
                  <h3 className="poppins-heavy text-gray-100 text-2xl leading-4 mt-2">
                    Downsville
                  </h3>
                  <h6 className="poppins-light italic text-red-700 leading-5">
                    Fire Department
                  </h6>
                </div>
              </div>
            </Link>
            <div className="md:hidden">
              <FontAwesomeIcon
                className="text-gray-100 text-2xl"
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
