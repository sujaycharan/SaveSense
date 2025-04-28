import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // Server side URL
});

export const fetchIncome = () => API.get('/income');
export const fetchExpenses = () => API.get('/expenses');
export const fetchLoans = () => API.get('/loans');

export default API;
