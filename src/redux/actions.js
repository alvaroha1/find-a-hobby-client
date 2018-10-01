export const logIn = apiInfo => ({
  type: 'LOG_IN',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
  }
});

export const Discover = apiInfo => ({
  type: 'DISCOVER',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const likeHobby = apiInfo => ({
  type: 'LIKE',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const dislikeHobby = apiInfo => ({
  type: 'DISLIKE',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const Discover = apiInfo => ({
  type: 'POST_HOBBY',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});