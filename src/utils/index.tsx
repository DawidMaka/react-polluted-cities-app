export function createQueryParams<T extends object>( params: T ) {
  const paramKeys = Object.keys( params ) as Array<keyof typeof params>;
  return paramKeys.
    map( ( k ) => {
      return `${k}=${params[ k ]}`;
    } ).
    join( '&' );
}
