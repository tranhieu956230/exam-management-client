import axios from "axios";

const baseUrl = "http://localhost:5000";

export const logIn = async (username, password) => {
  const response = await axios.post(`${baseUrl}/user/login`, {
    username,
    password
  });
  return response["data"];
};
