export const logIn = apiInfo => ({
  type: 'LOG_IN',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
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

export const postHobby = apiInfo => ({
  type: 'POSTHOBBY',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const createHobby = data => ({
  type: 'CREATEHOBBY',
  data
});

export const Favorites = apiInfo => ({
  type: 'FAVORITES',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  }
});

export const newUser = apiInfo => ({
  type: 'NEW_USER',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  },
});

export const logout = apiInfo => ({
  type: 'LOG_OUT',
  api: {
    endpoint: apiInfo.endpoint,
    method: apiInfo.method,
    body: apiInfo.body,
    headers: apiInfo.headers
  },
});
