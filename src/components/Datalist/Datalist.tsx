import React from 'react';
import Option from './Option/Option';

type DatalistProps = {
  readonly countries: string[];
  readonly id: string;
};

const Datalist = React.memo<DatalistProps>( ( { countries, ...props } ) => {
  return (
    <datalist {...props}>
      {countries.map( ( country ) => {
        return <Option key={country} country={country} />;
      } )}
    </datalist>
  );
} );
Datalist.displayName = 'Datalist';

export default Datalist;
