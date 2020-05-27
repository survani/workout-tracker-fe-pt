import axios from './node_modules/axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: '',
  });
};
