import api from "./apiHelpers/apiConfig";

export const fetchMemberToken = async (data) => {
  try {
    let res = await api.post("/auth", data);
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const fetchCurrentMemberData = async () => {
  try {
    let res = await api.get("/auth");
    console.log(res);
    return res.data;
  } catch (e) {
    throw e;
  }
};
