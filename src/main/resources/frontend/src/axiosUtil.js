import axios from 'axios';

export const axClinet = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
});