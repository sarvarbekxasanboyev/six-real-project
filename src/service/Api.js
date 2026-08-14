import axios from "axios";
import { getItem } from "../components/helpers/Persistance-storage";

axios.defaults.baseURL = '/api';

axios.interceptors.request.use(config => {
    const token = getItem('token');
    const authorization = token ? `Token ${token}` : '';
    config.headers.Authorization = authorization;
    return config;
});

export default axios;