import { baseUrl } from "@/common/api/endpoints";
import axios, { AxiosInstance } from "axios";
import https from "https";

const httpAgent = new https.Agent({
    rejectUnauthorized: false,
});

const httpClient: AxiosInstance = axios.create({
    baseURL: baseUrl,
    httpsAgent: httpAgent,
    headers: {
        "Content-Type": "application/json"
    }
});

httpClient.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

httpClient.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error.response.data);
    }
);


export default httpClient;