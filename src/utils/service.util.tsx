import axios, { AxiosRequestConfig } from "axios";

export const callApi = async (options: AxiosRequestConfig) => {
  return await axios(options);
};
