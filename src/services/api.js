import axios from "axios";
import {ApiInformation, HttpCode} from "../utils/const";

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: ApiInformation.BASE_URL,
    timeout: ApiInformation.TIMEOUT,
    withCredentials: ApiInformation.WITH_CREDENTIALS
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
