import axios from "axios";
import store from "store/index";
import { getCookie } from "services/CookieHelper";
import actions from "store/login/TokenExpiredReducer";

const httpClient = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_BASE_URL,
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = getCookie("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response && error.response.status === 401) {
        if (
          (error.response.data &&
            error.response.data.error &&
            error.response.data.error[0] !== null) ||
          (error.response.data &&
            error.response.data.Error &&
            error.response.data.Error[0] !== null)
        ) {
          store.dispatch(actions.actions.tokenExpired());
        } else {
          store.dispatch(actions.actions.tokenExpired());
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default httpClient();
