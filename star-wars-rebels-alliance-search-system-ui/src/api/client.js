import config from '../config';

async function client(
  endpoint,
  {
    body, token, method, headers: customHeaders, ...customConfig
  } = {},
) {
  const requestParameters = {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      Accept: 'application/json',
      'Content-Type': body ? 'application/json' : undefined,
      Authorization: token ? `Bearer ${token}` : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  return fetch(`${config.apiUrl}${endpoint}`, requestParameters).then(
    async (response) => {
      const responseData = await response.json();
      if (response.ok) {
        return responseData;
      }
      return Promise.reject(responseData);
    },
  );
}

export default client;
