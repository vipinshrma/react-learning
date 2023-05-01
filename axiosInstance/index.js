import axios from 'axios';



export const axioInstance = axios.create({
    baseURL: "https://localhost:5000/",
    headers: {
        Authorization: `Bearer ${token}`
    }
})


axioInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    let token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });