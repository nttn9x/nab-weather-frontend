import axios from "axios";

import _get from "lodash/get";
import _isArray from "lodash/isArray";

import { HTTP_CODE } from "constants/common";

function formatResponse(response: any): any {
  return response.data;
}

function handleDataError(error: any) {
  let message;
  if (error.response) {
    if (error.response.status === HTTP_CODE.InternalServerError) {
      message = "Internal Server Error";
    } else {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (_isArray(error.response.data)) {
        message = _get(error.response.data, "data[0].messages[0]");
      } else {
        message = _get(error.response.data, "message");
      }
    }
  } else {
    message = error.message;
  }

  return { message };
}

function handleBeforeCallApi() {
  // Add a request interceptor
  axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      // config.headers.Authorization = `Bearer ${getToken()}`;

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
}

function handleAfterCallApi() {
  // Add a response interceptor
  axios.interceptors.response.use(
    function (response: any): any {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data

      return formatResponse(response);
    },
    function (error: any) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error

      return Promise.reject(handleDataError(error));
    }
  );
}

function setUpApi() {
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

  handleBeforeCallApi();

  handleAfterCallApi();
}

export { setUpApi };
