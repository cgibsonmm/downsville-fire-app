import React, { useEffect } from "react";
import { useRouter } from "next/router";

import LoginForm from "../components/login/LoginForm";
import { loginMember } from "../redux/actions/loginActions";
import { useDispatch, useSelector } from "react-redux";

export default function memberLogin() {
  const router = useRouter();
  const loggedInMember = useSelector((state) => state.currentMember.member);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.currentMember.error);

  const handleLogin = (formInput) => {
    dispatch(loginMember(formInput));
  };

  useEffect(() => {
    if (loggedInMember) {
      console.log(loggedInMember);
      router.push("/");
    }
  }, [loggedInMember]);

  return (
    <div className="w-screen p-4">
      <div className="flex flex-col w-full justify-center items-center bg-red-400 rounded-lg">
        <h3 className="text-xl">Member Login</h3>
        {error && <div className="font-bold text-red-600">Error: {error}</div>}
        <LoginForm handleLogin={handleLogin} />
      </div>
    </div>
  );
}
