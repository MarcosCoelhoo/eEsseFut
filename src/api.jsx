import axios from 'axios';

const API_URL = 'http://localhost:3333/times';

export const getTimes = async (idTime = '') => {
  try {
    const { data } = await axios.get(`${API_URL}?id=${idTime}`);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
