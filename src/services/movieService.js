import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_AUTH = import.meta.env.VITE_API_AUTH;


const options = {
  params: {
    language: 'en-US',
  },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_AUTH}`,
  },
};

export const fetchTrend = async () => {
  const res = await axios.get("trending/movie/day", {
    params: options.params,
    headers: options.headers,
  });
  return res.data;
};

export const fetchSearch = async (query, page = 1) => { 
  const res = await axios
    .get("search/movie", {
    params: {
      ...options.params,
      query: query,
      include_adult: 'false',
      page: page,
    },
    headers: options.headers,
  })
    .then(res => res.data)
    .catch(error => console.error(error));
  
  return res;
};

export const fetchMovDetails = async (movieId) => {
  const res = await axios
    .get(`movie/${movieId}`, { 
      params: options.params,
      headers: options.headers,
    })
    .then(res => res.data)
    .catch(error => console.error(error));
  return res;
};
 
export const fetchMovCast = async (movieId)  => {
  const res = await axios
    .get(`movie/${movieId}/credits`, {
      params: options.params,
      headers: options.headers,
    })
    .then(res => res.data)
    .catch(error => console.error(error));
  return res;
};
 
export const fetchMovRev = async (movieId, page = 1)  => {
  const res = await axios
    .get(`movie/${movieId}/reviews`, {
      params: {
        ...options.params,
        page: page,
      },
      headers: options.headers,
    })
    .then(res => res.data)
    .catch(error => console.error(error));
  return res;
 };