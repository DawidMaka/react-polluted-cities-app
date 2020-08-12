import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';

const StyledMain = styled.main`
  margin: 0 auto;
  padding: 0 30px;
  text-align: center;

  @media (min-width: 576px) {
    max-width: 600px;
  }
`;

const MainTemplate = ({ children }) => (
  <StyledMain>
    <h1>The most polluted cities</h1>
    <p>Check 10 the most polluted cities in Poland, Germany, Spain or France.</p>
    <GlobalStyle />
    {children}
  </StyledMain>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
