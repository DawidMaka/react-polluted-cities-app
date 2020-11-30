import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;

type InputProps = {
  type?: string;
  autoComplete?: string;
  name?: string;
  list?: string;
};

const Input = React.memo<InputProps>( ( { ...props } ) => {
  return <StyledInput {...props} />;
} );
Input.displayName = 'Input';

export default Input;
