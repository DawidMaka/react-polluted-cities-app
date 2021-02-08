function createQueryParams<T extends object>(params: T) {
  const paramKeys = Object.keys(params) as Array<keyof typeof params>

  return paramKeys
    .map((k) => `${k}=${params[k]}`)
    .join('&')
}

export default createQueryParams
