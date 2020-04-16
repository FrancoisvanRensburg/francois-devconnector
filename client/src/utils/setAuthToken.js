// Take a function that'll take the token. If there is a token, it will be added to the headers, otherwise it will delete is

import axios from 'axios';

const setAuthToken = (token) => {
  // token will come in from local storage
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
