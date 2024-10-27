import axios from 'axios';

const api = axios.create({
  baseURL: 'https://roxlierbackend.onrender.com/api',
});

export const getTransactions = (month, page = 1, search = "") =>
  api.get(`/transactions`, { params: { month, page, search } });

export const getStatistics = (month) => api.get(`/statistics`, { params: { month } });

export const getPriceRange = (month) => api.get(`/price-range`, { params: { month } });

export const getCategoryStats = (month) => api.get(`/category`, { params: { month } });

export const getCombinedData = (month) => api.get(`/combined`, { params: { month } });

export default api;
