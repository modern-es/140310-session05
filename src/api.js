import axios from 'axios';
import Toastify from 'toastify-js'

export const api = axios.create({
    baseURL: 'http://127.0.0.1:8090'
})



api.interceptors.request.use(function (config) {
    config.headers.Authorization = "bearer aaaaaa";
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


api.interceptors.response.use(function (response) {

    if (response.config.method !== 'get') {
        Toastify({
            text: "Success",
            duration: 3000
        }).showToast();
    }


    return response;
}, function (error) {

    Toastify({
        text: "Error:" + error,
        duration: 3000
    }).showToast();

    return Promise.reject(error);
});