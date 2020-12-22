import client from './client';
import { getToken } from '../utils/auth';

function getContent({ type, id }) {
  const token = getToken();
  const endpoint = `/contents/${type}/${id}`;
  return client(endpoint, { method: 'GET', token });
}

export { getContent };
