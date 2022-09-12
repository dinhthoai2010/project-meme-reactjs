import axios from 'axios';
import { BASE_URL } from '../constants';
import { getToken } from '../helpers';

export const api = {
  call() {
    return axios.create({
      baseURL: BASE_URL
    });
  },
  author () {
    return axios.create({
      baseURL: BASE_URL,
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    });
  },
  token () {
    const token = getToken ();
    return axios.create({
      baseURL: BASE_URL,
      headers: { 'Authorization': 'Bearer '+token }
    });
  }
}

