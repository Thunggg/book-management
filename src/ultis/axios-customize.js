import axios from "axios";

const baseURL=import.meta.env.VITE_URL_BACKEND;
// console.log(baseURL)
const instance = axios.create({
    baseURL: baseURL, // Set the base URL for all requests
    withCredentials: true,
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // console.log(response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return (response && response.data) ? response.data : response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return (error?.response?.data) ?? Promise.reject(error); // neu ben trai null hoac undefine thi lay gia tri ben phai
});

export default instance;