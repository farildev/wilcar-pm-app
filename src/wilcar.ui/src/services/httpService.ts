import axios from 'axios';
import { baseURL } from '../constants/config';


const _httpClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleErrors = (error) => {
  console.error('Error:', error);
  throw error;
};

const httpService = {
  get: <T>(url: string) => _httpClient.get<ApiResponse<T>>(url).then((response) => response.data).catch(handleErrors),

  post: <T>(url: string, data: any) => _httpClient.post<ApiResponse<T>>(url, data).then((response) => response.data).catch(handleErrors),

  put: <T>(url: string, data: any) => _httpClient.put<ApiResponse<T>>(url, data).then((response) => response.data).catch(handleErrors),

  del: <T>(url: string) => _httpClient.delete<ApiResponse<T>>(url).then((response) => response.data).catch(handleErrors),
};

export default httpService;