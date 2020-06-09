import Link from "next/link";
import { parseLink } from "../../helpers/link";

export default function NavLink({ link, handleLinkClick }) {
  let URLLink = parseLink(link);

  return (
    <Link href={`/${URLLink}`}>
      <li
        onClick={() => handleLinkClick()}
        className="px-4 md:px-2 lg:px-4 py-2 poppins-mid md:text-gray-100"
      >
        {link}
      </li>
    </Link>
  );
}
