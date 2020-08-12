import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option/Option';

const Datalist = ({ countries, ...props }) => (
  <datalist {...props}>
    {countries.map(country => (
      <Option key={country} country={country} />
    ))}
  </datalist>
);

Datalist.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string),
};

Datalist.defaultProps = {
  countries: [],
};

export default Datalist;
