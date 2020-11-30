import React, { ComponentProps } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ backgroundColor: string}>`
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: ${( props ) => {
    return props.backgroundColor ? props.backgroundColor : 'green';
  }};
  border: 1px solid #007bff;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s;

  &:disabled {
    opacity: 0.65;
  }

  &:hover {
    cursor: pointer;
  }
`;

type ButtonProps = ComponentProps<typeof StyledButton>;

const Button = React.memo<ButtonProps>( ( { ...props } ) => {
  return <StyledButton {...props}/>;
} );
Button.displayName = 'Button';

export default Button;
