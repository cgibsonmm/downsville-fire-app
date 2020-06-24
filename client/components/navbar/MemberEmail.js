import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { logoutMember } from "../../redux/actions/loginActions";
import { useState } from "react";

export default function MemberEmail({ member }) {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  return (
    <li className="px-4 md:px-2 lg:px-4 py-2 poppins-mid md:text-gray-100 flex items-center flex-col relative">
      <div>
        {member}
        <FontAwesomeIcon
          onClick={() => setToggle(!toggle)}
          icon="angle-down"
          className="ml-1"
        />
      </div>
      {toggle && (
        <ul className="flex flex-col absolute z-10 mt-6 bg-white w-full text-gray-900">
          <li className="px-4 md:px-2 lg:px-4 py-2 poppins-mid md:text-gray-900">
            My Account
          </li>
          <li
            onClick={() => dispatch(logoutMember())}
            className="px-4 md:px-2 lg:px-4 py-2 poppins-mid md:text-gray-900"
          >
            Log Out
          </li>
        </ul>
      )}
    </li>
  );
}
