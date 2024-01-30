import axios from 'axios';
import { API } from '../config';

let refresh = false;

const handleLogout = () => {
  localStorage.clear();
};

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401 && !refresh) {
      refresh = true;
      try {
        const refreshTokenResponse = await axios.post(
          `${API}users/refresh-token`,
          {},
          { withCredentials: true }
        );

        if (refreshTokenResponse.status === 200) {
          const newAccessToken = refreshTokenResponse.data?.data['access_token'];
          console.log('newAccessToken',newAccessToken);
          axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
          localStorage.setItem('token', newAccessToken);
          return axios(error.config);
        }
      } catch (refreshError) {
        // Handle refresh error if necessary
        if (refreshError.response.status === 400) {
          handleLogout();
        }else{
          console.error('refreshError', refreshError);
        }
      } finally {
        refresh = false; 
      }
    }
    return Promise.reject(error);
  }
);
