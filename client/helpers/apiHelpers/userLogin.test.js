import { login } from "./userLogin";
import axios from "axios";

jest.mock("axios");

test("Login", async () => {
  const formData = { email: "test@email.com", password: "1234567" };
  axios.post.mockResolvedValue({
    data: {
      auth: "token",
    },
  });

  const title = await login(formData);
  expect(title.data.auth).toEqual("token");
});
