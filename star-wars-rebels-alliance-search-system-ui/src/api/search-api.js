import client from './client';
import { getToken } from '../utils/auth';

function search({ search, page, type }) {
  const token = getToken();
  const endpoint = `/contents?${search ? `search=${search}` : ''}&${page ? `page=${page}` : ''}&${type ? `type=${type}` : ''}`;
  return client(endpoint, { method: 'GET', token });
}

export { search };
