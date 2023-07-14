import { GET_USERS, SIGNUP_API, VERIFY_OTP } from "../../config/urls";
import { apiGet, apiPost, setItem } from "../../utils/utils";
import { saveUserData } from "../reducers/auth";
import store from "../store";

export function signUp(data) {
  return apiPost(SIGNUP_API, data);

  //  store.dispatch(saveUserData(data))
}

export function otpVerify(data) {
  return new Promise((resolve, reject) => {
    apiPost(VERIFY_OTP, data)
      .then((res) => {
        if (!!res?.data?._id) {
          setItem("userData", res.data)
            .then((returnValue) => {
              store.dispatch(saveUserData(res?.data));
              resolve(res);
              return;
            })
            .catch((error) => {
              resolve(error);
            });
        }
      })
      .catch((err) => {
        reject(err);
      });
  });

  //   return apiPost(VERIFY_OTP, data);

}

export const  fetchUsers = (query = "") =>{
  return apiGet(GET_USERS+query)
}
