import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  width: 100%;
  display: inline-block;
`;

const Label = ({ children, labelName, srOnly }) => (
  <StyledLabel>
    {srOnly ? <span className="sr-only">{labelName}</span> : <>{labelName}</>}
    {children}
  </StyledLabel>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  labelName: PropTypes.string.isRequired,
  srOnly: PropTypes.bool,
};

Label.defaultProps = {
  srOnly: false,
};

export default Label;
