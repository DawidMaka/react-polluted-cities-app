import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  width: 100%;
  display: inline-block;
`;

type LabelProps = {
  readonly labelName: string;
  readonly srOnly?: boolean;
};

const Label = React.memo<React.PropsWithChildren<LabelProps>>( ( { children, labelName, srOnly = false } ) => {
  return (
    <StyledLabel>
      {srOnly ? <span className="sr-only">{labelName}</span> : <>{labelName}</>}
      {children}
    </StyledLabel>
  );
} );
Label.displayName = 'Label';

export default Label;
