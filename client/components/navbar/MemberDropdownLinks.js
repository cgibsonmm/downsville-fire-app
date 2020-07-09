import { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutMember } from "../../redux/actions/loginActions";

import Link from "next/link";

export default function MemberDropdownLinks({ member }) {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const { admin } = member;
  return (
    <div>
      <ul
        onClick={() => setToggle(false)}
        className="bg-gray-200 flex flex-col bg-white w-full text-gray-900"
      >
        <li className="px-4 md:px-2 lg:px-4 py-2 poppins-mid md:text-gray-900">
          My Account
        </li>
        {admin && (
          <li className="px-4 md:px-2 lg:px-4 py-2 poppins-mid md:text-gray-900">
            <Link href="/events/new">
              <a>Create Event</a>
            </Link>
          </li>
        )}
        <li
          onClick={() => dispatch(logoutMember())}
          className="px-4 md:px-2 lg:px-4 py-2 poppins-mid md:text-gray-900"
        >
          Log Out
        </li>
      </ul>
    </div>
  );
}
