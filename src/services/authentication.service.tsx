import axios from "axios";

const LOGIN = "/auth/local";
const REGISTER = "/auth/local/register";

const apiAxios = axios.create({
  headers: {
    common: {},
  },
});

export const login = async (data: { identifier: string; password: string }) => {
  return apiAxios.post(LOGIN, data);
};

export const register = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  return apiAxios.post(REGISTER, data);
};
