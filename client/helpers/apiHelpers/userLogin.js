import axios from "axios";

export const login = async (formData) => {
  let token = await axios.post("/api/v1/login", { user: formData });

  return token;
};
