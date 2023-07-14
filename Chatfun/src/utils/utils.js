import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const apiReq = async (
  endPoint,
  data,
  method,
  headers,
  requestOptions = {}
) => {
  return new Promise(async (req, rej) => {
    headers = {
      ...headers,
    };

    if (method === "get" || method === "delete") {
      data = {
        ...requestOptions,
        ...data,
        headers,
      };
    }

    axios[method](endPoint, data, { headers })
      .then((result) => {
        const { data } = result;

        if (data.status === false) {
          return rej(data);
        }
        return result(data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error && error.response, "the error response");
        if (error && error.response && error.response.status === 401) {
          return rej({ ...error.response.data, msg: "UnAuthorized" });
        }

        if (error && error.response && error.response.data) {
          if (!error.repsonse.data.message) {
            return rej({
              ...error.response.data,
              msg: error.response.data.message || "Netowrk error",
            });
          }
          return rej(error.response.data);
        } else {
          return rej({ message: "Network Error", msg: "Network Error" });
        }
      });
  });
};

export function apiPost(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, "post", headers);
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, "delete", headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
  return apiReq(endPoint, data, "get", headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, "put", headers);
}

export const setItem = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (err) {
    console.log("Error raised during setItem");
  }
};

export const getItem = async (key) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then((data) => {
        resolve(JSON.parse(data));
      })
      .catch((error) => reject(error));
  });
};

export const clearAllItem = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log("Error raised during setItem", e);
  }
};
