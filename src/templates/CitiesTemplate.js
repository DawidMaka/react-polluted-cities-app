import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from 'components/SearchForm/SearchForm';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Spinner from 'components/Spinner/Spinner';

const CitiesTemplate = ({ children, isError, isLoading }) => (
  <>
    <ErrorMessage>{isError}</ErrorMessage>
    <SearchForm role="search" />
    {isLoading && <Spinner />}
    {children}
  </>
);

export default CitiesTemplate;

CitiesTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  isError: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

CitiesTemplate.defaultProps = {
  isError: '',
};
