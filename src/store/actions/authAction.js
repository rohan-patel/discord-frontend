import * as api from "../../api";
import { openAlertMessage } from "./alertActions";
import jwt_decode from "jwt-decode";

export const authAction = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
    register: (userDetails, navigate) =>
      dispatch(register(userDetails, navigate)),
    setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
    test: (navigate) => dispatch(test(navigate)),
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authAction.SET_USER_DETAILS,
    userDetails,
  };
};

const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);
    const { principal } = userDetails;

    if (response.error) {
      // console.log(response.exception.response.data.message);
      dispatch(openAlertMessage(response?.exception?.response?.data?.message));
    } else {
      const jwt = response.headers.authorization;
      const jwtPayload = jwt_decode(jwt);
      const userDetails = {
        token: jwt,
        loggedInUsing: principal,
        username: jwtPayload.username,
        userId: jwtPayload.userId,
        email: jwtPayload.email,
      };
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      navigate("/dashboard");
    }
  };
};

const register = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);
    const { username: principal, password } = userDetails;

    if (response.error) {
      console.log(response.exception);
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const jwt = await obtainJwt({ principal, password });

      const jwtPayload = jwt_decode(jwt);
      const userDetails = {
        token: jwt,
        loggenInUsing: principal,
        username: jwtPayload.username,
        userId: jwtPayload.userId,
        email: jwtPayload.email,
      };
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      navigate("/dashboard");
    }
  };
};

const test = () => {
  return async (dispatch) => {
    const response = await api.test();
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
      //   navigate("/login");
    }
  };
};

const obtainJwt = async (userDetails) => {
  const response = await api.login(userDetails);

  return response.headers.authorization;
  // return jwt;
};
