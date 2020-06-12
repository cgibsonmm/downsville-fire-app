import React from "react";

export default function memberLogin() {
  return (
    <div className="w-screen">
      <div className="flex w-full justify-center">
        <form className="flex flex-col m-10">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          />
          <label for="password">Password</label>
          <input type="password" />
        </form>
      </div>
    </div>
  );
}
