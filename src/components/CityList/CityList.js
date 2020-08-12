import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CityItem from 'components/CityList/CityItem/CityItem';
import List from 'components/List/List';

const StyledList = styled(List)`
  margin-top: 40px;
`;

const CityList = ({ cities }) => (
  <>
    {cities.length > 0 && (
      <StyledList>
        {cities.map(({ pageid, title, extract }) => (
          <CityItem key={pageid} title={title} description={extract} />
        ))}
      </StyledList>
    )}
  </>
);

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      pageid: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      extract: PropTypes.string.isRequired,
    }),
  ),
};

CityList.defaultProps = {
  cities: [],
};

export default CityList;
