import axios from 'axios';

// 创建 axios 实例 - APP 端
const appRequest = axios.create({
  baseURL: 'http://localhost:8080/api/app',
  timeout: 30000,
});

// 请求拦截器 - 添加 Token（如果需要）
appRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
appRequest.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
    }
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

export default appRequest;
