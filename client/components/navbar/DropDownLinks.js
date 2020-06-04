import NavLink from "./NavLink";

export default function DropDownLinks({ links, handleLinkClick }) {
  return (
    <ul className="bg-gray-200">
      {links.map((link) => (
        <NavLink
          handleLinkClick={handleLinkClick}
          link={link}
          key={`nav-link-${link}`}
        />
      ))}
    </ul>
  );
}
