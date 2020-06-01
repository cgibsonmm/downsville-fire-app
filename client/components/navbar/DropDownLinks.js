import NavLink from "./NavLink";

export default function DropDownLinks({ links }) {
  return (
    <ul className="bg-gray-200">
      {links.map((link) => (
        <NavLink link={link} key={`nav-link-${link}`} />
      ))}
    </ul>
  );
}
