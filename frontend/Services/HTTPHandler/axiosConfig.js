import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

axiosInstance.interceptors.request.use(
  (request) => {
    const jtoken = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    if (jtoken) {
      request.headers.Authorization = `Bearer ${jtoken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);
