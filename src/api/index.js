import axios from "axios";

const callApi = axios.create({
    baseURL: "https://192.168.1.7:8082/api"
    // baseURL: "https://localhost:5001/api"
})

export default callApi;