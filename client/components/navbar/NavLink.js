import Link from "next/link";

export default function NavLink({ link }) {
  return (
    <Link href={`/${link}`}>
      <li className="px-4 py-2">{link}</li>
    </Link>
  );
}
