import axios from "axios";

const myUrl = "http://localhost:8000"

const axiosClient = axios.create({
    baseURL: myUrl,
    withCredentials: true
})

export default axiosClient;