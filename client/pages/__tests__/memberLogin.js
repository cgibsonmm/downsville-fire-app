import { render, cleanup } from "@testing-library/react";
import MemberLogin from "../member-login";

beforeEach(cleanup);

describe("<MemberLogin />", () => {
  test("<MemberLogin />", () => {
    let { getByTestId, container } = render(<MemberLogin />);

    let usernameForm = getByTestId("usernameForm");
    let passwordForm = getByTestId("passwordForm");
    expect(passwordForm.textContent).toBe("");
    expect(usernameForm.textContent).toBe("");

    expect(container.firstChild).toMatchSnapshot();
  });
});
