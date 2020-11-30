import React from 'react';

type State = {
  doFetch: any;
  isLoading: boolean;
};

const PageContext = React.createContext<State | undefined>( undefined );

export default PageContext;
