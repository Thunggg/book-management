import axios from "../ultis/axios-customize"

const registerAPI = (email, fullName, password, phone) => {
    const URL_BACKEND = "/api/v1/user/register";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    } 
    return axios.post(URL_BACKEND, data);
}

const loginAPI = (username, password) => {
    const URL_BACKEND = "/api/v1/auth/login";
    const data = {
        username: username,
        password: password,
        delay: 5000
    } 
    return axios.post(URL_BACKEND, data);
}

const fetchAccount = () => {
    return axios.get("/api/v1/auth/account");
}

export {
    registerAPI, loginAPI, fetchAccount
}