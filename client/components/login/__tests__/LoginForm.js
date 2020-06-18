import { render, fireEvent, cleanup } from "@testing-library/react";
import LoginForm from "../loginForm";

let onSubmit = jest.fn((e) => e.preventDefault());

describe("<LoginFrom />", () => {
  test("submit", () => {
    const { getByText } = render(<LoginForm handleLogin={onSubmit} />);

    fireEvent.click(getByText("Submit"));
    expect(onSubmit).toHaveBeenCalled();
  });
});
