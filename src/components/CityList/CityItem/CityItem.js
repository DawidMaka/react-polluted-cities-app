import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/List/ListItem/ListItem';

const CityItem = ({ title, description }) => (
  <ListItem>
    <h2>{title}</h2>
    <p>{description}</p>
  </ListItem>
);

CityItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

CityItem.defaultProps = {
  title: '',
  description: '',
};

export default CityItem;
