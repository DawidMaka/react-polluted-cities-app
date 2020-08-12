import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { countries } from 'base/variables';
import Datalist from 'components/Datalist/Datalist';
import Button from 'components/Button/Button';
import Label from 'components/Label/Label';
import Input from 'components/Input/Input';
import PageContext from 'context';

const StyledForm = styled.form`
  margin-top: 20px;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 400px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

const StyledFormGroup = styled.div`
  position: relative;
  flex: 0 0 70%;

  @media (min-width: 400px) {
    margin-right: 4px;
  }
`;

const SearchForm = ({ role }) => {
  const { doFetch, isLoading } = useContext(PageContext);

  return (
    <StyledForm
      role={role}
      onSubmit={e => {
        e.preventDefault();

        const { value } = e.target.querySelector("input[name='country']");

        doFetch(value);
      }}
    >
      <StyledFormGroup>
        <Label srOnly labelName="Country name:">
          <Input autoComplete="off" name="country" list="countries" />
          <Datalist id="countries" countries={countries} />
        </Label>
      </StyledFormGroup>
      <Button type="submit" disabled={isLoading}>
        Search
      </Button>
    </StyledForm>
  );
};

SearchForm.propTypes = {
  role: PropTypes.string,
};

SearchForm.defaultProps = {
  role: '',
};

export default SearchForm;
