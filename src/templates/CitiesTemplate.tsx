import React from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Spinner from 'components/Spinner/Spinner';

type CitiesTemplateProps = {
    isError: string;
    isLoading: boolean;
};

const CitiesTemplate = React.memo<React.PropsWithChildren<CitiesTemplateProps>>( ( { children, isError, isLoading } ) => {
  return (
    <>
      <ErrorMessage>{isError}</ErrorMessage>
      <SearchForm role="search" />
      {isLoading && <Spinner />}
      {children}
    </>
  );
} );
CitiesTemplate.displayName = 'CitiesTemplate';

export default CitiesTemplate;
