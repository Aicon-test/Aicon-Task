import axios, { AxiosInstance, AxiosRequestConfig } from "axios";


const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});


const api = (axios: AxiosInstance) => {
  return {
    get<T>(url: string, config?: AxiosRequestConfig) {
      return axios.get<T>(url, config);
    },

    post<T>(
      url: string,
      body?: Record<string, any>,
      config?: AxiosRequestConfig
    ) {
      return axios.post<T>(url, body, config);
    },

    patch<T>(
      url: string,
      body?: Record<string, any>,
      config?: AxiosRequestConfig
    ) {
      return axios.patch<T>(url, body, config);
    },

    formDataPatch<T>(
      url: string,
      body?: FormData,
      config?: AxiosRequestConfig
    ) {
      return axios.patch<T>(url, body, config);
    },

    formDataPost<T>(url: string, body?: FormData, config?: AxiosRequestConfig) {
      return axios.post<T>(url, body, config);
    },

    delete<T>(url: string, config?: AxiosRequestConfig) {
      return axios.delete<T>(url, config);
    },

    deleteBatch<T>(
      url: string,
      body?: Record<string, any>,
      config?: AxiosRequestConfig
    ) {
      return axios.delete<T>(url, { ...config, data: body });
    },
  };
};

export default api(instance);
