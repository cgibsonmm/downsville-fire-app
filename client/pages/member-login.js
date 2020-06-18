import React, { useState } from "react";
import { login } from "../helpers/apiHelpers/userLogin";
import LoginForm from "../components/login/LoginForm";

export default function memberLogin() {
  const handleLogin = (formInput) => {
    login(formInput);
  };

  return (
    <div className="w-screen p-4">
      <div className="flex flex-col w-full justify-center items-center bg-red-400 rounded-lg">
        <h3 className="text-xl">Member Login</h3>
        <LoginForm handleLogin={handleLogin} />
      </div>
    </div>
  );
}
