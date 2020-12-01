import React from 'react';

type State = {
  doFetch: ( value: string ) => void;
  isLoading: boolean;
};

const PageContext = React.createContext<State | undefined>( undefined );

export default PageContext;
