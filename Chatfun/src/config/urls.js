export const API_BASE_URL = "http://localhost:3000";

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const SIGNUP_API = getApiUrl("/Users/signup");
export const GET_USERS = getApiUrl("/Users/users");
export const VERIFY_OTP = getApiUrl("/Users/otpverify");
