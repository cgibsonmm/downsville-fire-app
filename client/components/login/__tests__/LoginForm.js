import { render, fireEvent, cleanup, getByText } from "@testing-library/react";
import LoginForm from "../loginForm";

let onSubmit = jest.fn();

describe("<LoginFrom />", () => {
  beforeEach(cleanup);
  test("submit", () => {
    const { getByText } = render(<LoginForm handleLogin={onSubmit} />);

    fireEvent.click(getByText("Submit"));
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith({ email: "", password: "" });
  });

  test("email input", () => {
    const { getByText, getByLabelText } = render(
      <LoginForm handleLogin={onSubmit} />
    );

    fireEvent.change(getByLabelText("Email"), {
      target: { value: "test@email.com" },
    });

    fireEvent.click(getByText("Submit"));
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith({
      email: "test@email.com",
      password: "",
    });
  });

  test("password input", () => {
    const { getByText, getByLabelText } = render(
      <LoginForm handleLogin={onSubmit} />
    );

    fireEvent.change(getByLabelText("Password"), {
      target: { value: "password" },
    });

    fireEvent.click(getByText("Submit"));
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith({
      email: "",
      password: "password",
    });
  });
});
