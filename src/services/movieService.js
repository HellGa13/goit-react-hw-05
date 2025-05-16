import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_AUTH = import.meta.env.VITE_API_AUTH;

if (!API_AUTH) {
  throw new Error(
    'API key is missing. Please set API_AUTH in your environment variables.'
  );
}
const options = {
  params: {
    language: 'en-US',
  },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_AUTH}`,
  },
};