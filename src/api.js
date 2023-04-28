import axios from "axios";
import { logout } from "./shared/utils/auth";

const config = { withCredentials: true };

const apiClient = axios.create({
  baseURL: "http://localhost:8082/discord-clone/api",
  timeout: 3600000,
});

apiClient.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

apiClient.interceptors.request.use(
  (config) => {
    // console.log(config.url);

    if (config.url !== "/test") {
      const userDetails = localStorage.getItem("user");
      // console.log("inside interceptor");

      if (userDetails) {
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization = `Bearer ${token}`;
        // console.log(config.headers.Authorization);
      }
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const login = async (data) => {
  const { principal, password } = data;
  const authToken = btoa(principal + ":" + password);
  const header = "Basic " + authToken;
  try {
    return await apiClient.get("/test", {
      headers: {
        Authorization: header,
      },
      withCredentials: true,
    });
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("/auth/register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const test = async () => {
  const userDetails = localStorage.getItem("user");
  let header;
  if (userDetails) {
    const token = JSON.parse(userDetails).token;
    header = `Bearer ${token}`;
  }
  try {
    return await apiClient.get("/test", {
      headers: {
        Authorization: header,
      },
      withCredentials: true,
    });
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// ---------------------------------------------------------------------- //
// Friends Invitation System

export const sendFriendsInvitation = async (data) => {
  try {
    return await apiClient.post(`/friend-invitation/invite`, data, config);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

export const acceptFriendInvitation = async (data) => {
  try {
    return await apiClient.post("/friend-invitation/accept", data, config);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

export const rejectFriendInvitation = async (data) => {
  try {
    return await apiClient.post("/friend-invitation/reject", data, config);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// ------------------------------------------------------------------------ //
// Group

export const createGroup = async (data) => {
  try {
    return await apiClient.post("/group/create", data, config);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

export const addParticipant = async (data) => {
  try {
    // console.log(data);
    return await apiClient.post("/group/add", data, config);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// ------------------------------------------------------------------------ //

const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;

  console.log(exception);

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
    // responseCode === 401 && logout();
  }
};
