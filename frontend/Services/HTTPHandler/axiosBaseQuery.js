import { toast } from "react-toastify";
import axiosInstance from "./axiosConfig";

export const axiosBaseQuery =
  () =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axiosInstance({ url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      if (err?.code === "ERR_NETWORK") {
        toast.error("Network Error");
        throw err;
      }
      console.log(err);
      toast.error(err?.response?.data?.detail);

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
      // throw axiosError.response ? axiosError.response : axiosError;
    }
  };
