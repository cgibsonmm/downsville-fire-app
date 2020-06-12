import React from "react";
import { render, cleanup } from "@testing-library/react";
import Navbar from "./Navbar";

test("<Navbar />", () => {
  const wrapper = render(<Navbar />);
});
