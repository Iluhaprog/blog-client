import axios from 'axios';

const {REACT_APP_API_URL, REACT_APP_TIMEOUT} = process.env;

export const api = axios.create({
  baseURL: REACT_APP_API_URL,
  timeout: REACT_APP_TIMEOUT,
});
