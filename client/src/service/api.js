import axios from 'axios';



export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${process.env.REACT_APP_API_URL}/signup`, data)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${process.env.REACT_APP_API_URL}}/login`, data)
    } catch (error) {
        console.log('Error while calling Login API: ', error);
        return error.response;
    }
}

export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${process.env.REACT_APP_API_URL}}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error', error);
    }
}