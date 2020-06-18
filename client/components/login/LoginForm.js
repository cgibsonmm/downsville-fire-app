import React, { useState } from "react";

export default function LoginForm({ handleLogin }) {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => handleLogin(e, formInput)}
      className="flex flex-col w-full p-6"
      data-testid="loginForm"
    >
      <label htmlFor="email">Email</label>
      <input
        data-testid="usernameForm"
        type="email"
        name="email"
        onChange={handleChange}
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
      />
      <label htmlFor="password">Password</label>
      <input
        data-testid="passwordForm"
        type="password"
        name="password"
        onChange={handleChange}
        className="bg-white focus:outline-none focus:shadow-outline focus:text-xs border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
      />
      <button>Submit</button>
    </form>
  );
}
