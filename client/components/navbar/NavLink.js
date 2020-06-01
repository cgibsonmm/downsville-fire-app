import Link from "next/link";

export default function NavLink({ link, handleLinkClick }) {
  return (
    <Link href={`/${link}`}>
      <li onClick={() => handleLinkClick()} className="px-4 py-2">
        {link}
      </li>
    </Link>
  );
}
