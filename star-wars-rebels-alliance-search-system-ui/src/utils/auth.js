const tokenKey = 'sw-auth-token';

function getToken() {
  return JSON.parse(window.localStorage.getItem(tokenKey));
}

function setToken(token) {
  return window.localStorage.setItem(tokenKey, JSON.stringify(token));
}

export {
  getToken,
  setToken,
};
