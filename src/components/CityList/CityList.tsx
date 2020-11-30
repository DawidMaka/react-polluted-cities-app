import React from 'react';
import styled from 'styled-components';
import CityItem from 'components/CityList/CityItem/CityItem';
import List from 'components/List/List';

const StyledList = styled( List )`
  margin-top: 40px;
`;

type CityListProps = {
  cities: {
    pageid: number;
    title: string;
    extract: string;
    ns: number;
  }[];
};

const CityList = React.memo<CityListProps>( ( { cities } ) => {
  return (
    <>
      {cities.length > 0 && (
        <StyledList>
          {cities.map( ( city ) => {
            return <CityItem key={city.pageid} title={city.title} description={city.extract} />;
          } )}
        </StyledList>
      )}
    </>
  );
} );
CityList.displayName = 'CityList';

export default CityList;
