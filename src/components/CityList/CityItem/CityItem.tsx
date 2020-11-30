import React from 'react';
import ListItem from 'components/List/ListItem/ListItem';

type CityItemProps = {
  title: string;
  description: string;
};

const CityItem = React.memo<CityItemProps>( ( { title, description } ) => {
  return (
    <ListItem>
      <h2>{title}</h2>
      <p>{description}</p>
    </ListItem>
  );
} );
CityItem.displayName = 'CityItem';

export default CityItem;
