import api from "./apiConfig";

export const getOfficers = async () => {
  try {
    let res = await api("/line_officers");
    return res.data;
  } catch (e) {
    throw e;
  }
};
