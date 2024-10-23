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

export {registerAPI}