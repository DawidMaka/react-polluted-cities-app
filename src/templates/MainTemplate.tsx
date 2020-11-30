import React from 'react';
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

type MainTemplateProps = {
  readonly children: React.ReactNode;
};

const MainTemplate = ( { children }: MainTemplateProps ) => {
  return (
    <StyledMain>
      <h1>The most polluted cities</h1>
      <p>Check 10 the most polluted cities in Poland, Germany, Spain or France.</p>
      <GlobalStyle />
      {children}
    </StyledMain>
  );
};
MainTemplate.displayName = 'MainTemplate';

export default MainTemplate;
