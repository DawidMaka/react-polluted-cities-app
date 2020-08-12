import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #007bff;
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

const Button = ({ type, ...props }) => <StyledButton type={type} {...props} />;

Button.propTypes = {
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
