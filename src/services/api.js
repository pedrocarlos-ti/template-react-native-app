import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://api.github.com'
    baseURL: 'http://localhost:3000',
});

export default api;