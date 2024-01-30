// usePost.js
import axios from 'axios';
import { useReducer } from 'react';

const ACTIONS = {
  API_REQUEST: 'api-request',
  REQUEST_SUCCESS: 'request-success',
  REQUEST_ERROR: 'request-error'
};

const initialState = {
  data: null,
  loading: false,
  success: null,
  error: null
};

function reducer(state, { type, payload }) {
  switch (type) {
  case ACTIONS.API_REQUEST:
    return { ...state, loading: true, success: null, error: null };
  case ACTIONS.REQUEST_SUCCESS:
    return { ...state, data: payload, loading: false, success: payload?.message, error: null };
  case ACTIONS.REQUEST_ERROR:
    return { ...state, loading: false, success: null, error: payload };
  default:
    return state;
  }
}

function usePost(url, method, withCredentials = false) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const postData = async (data) => {
    dispatch({ type: ACTIONS.API_REQUEST });

    try {
      const response = await axios({
        method,
        url,
        withCredentials, // Pass the withCredentials parameter here
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data && response.data.data && response.data.data['access_token']) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.data['access_token']}`;
      } else {
        console.error('Access token not found in the response data');
      }
      dispatch({ type: ACTIONS.REQUEST_SUCCESS, payload: response.data });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        dispatch({ type: ACTIONS.REQUEST_ERROR, payload: error.response.data.error.message });
      }else if(error.response && error.response.status === 500){
        dispatch({ type: ACTIONS.REQUEST_ERROR, payload: error.response.data.error.message });
      }
      else {
        dispatch({ type: ACTIONS.REQUEST_ERROR, payload: error.message });
      }
    }
  };

  return { ...state, postData };
}

export default usePost;
