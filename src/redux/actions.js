export const logIn = apiInfo => ({
  type: 'LOG_IN',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});
