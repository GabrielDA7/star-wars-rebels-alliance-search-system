import client from './client';

function login({ username, password }) {
  return client('/users/login', { body: { username, password }, method: 'POST' });
}

export { login };
