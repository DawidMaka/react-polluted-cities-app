import React from 'react';
import 'normalize.css';
import MainTemplate from 'templates/MainTemplate';
import Cities from 'views/Cities';

const Root = () => {
  return (
    <MainTemplate>
      <Cities />
    </MainTemplate>
  );
};

export default Root;
