export const createQueryParams = params =>
  Object.keys(params)
    .map(k => `${k}=${params[k]}`)
    .join('&');
