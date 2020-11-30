import React from 'react';

type OptionProps = {
  readonly country: string;
};

const Option = React.memo<OptionProps>( ( { country } ) => {
  return <option value={country} />;
} );
Option.displayName = 'Option';

export default Option;
