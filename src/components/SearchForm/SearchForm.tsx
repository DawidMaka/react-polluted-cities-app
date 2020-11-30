import React, { useContext } from 'react';
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

type SearchFormProps = {
  role?: string;
};

const SearchForm = React.memo<SearchFormProps>( ( { ...props } ) => {
  const context = useContext( PageContext )!;

  return (
    <StyledForm
      {...props}
      onSubmit={( e ) => {
        e.preventDefault();
        const formElement = e.target as HTMLFormElement;
        const value = ( formElement.querySelector( 'input[name=\'country\']' )! as HTMLInputElement ).value;
        context.doFetch( value );
      }}
    >
      <StyledFormGroup>
        <Label labelName="Country name:" srOnly>
          <Input type="text" autoComplete="off" name="country" list="countries" />
          <Datalist id="countries" countries={countries} />
        </Label>
      </StyledFormGroup>
      <Button type="submit" disabled={context.isLoading} backgroundColor="#007bff">
        Search
      </Button>
    </StyledForm>
  );
} );
SearchForm.displayName = 'SearchForm';

export default SearchForm;
