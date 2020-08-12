import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ country }) => <option value={country} />;

Option.propTypes = {
  country: PropTypes.string.isRequired,
};

export default Option;
