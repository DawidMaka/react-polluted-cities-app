import styled from 'styled-components'
import React from 'react'

const StyledSearchForm = styled.form.attrs({
  role: 'search',
})`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 15px;

  @media (min-width: 400px) {
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
  }

  input {
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    color: #495057;
    display: block;
    flex-basis: 74%;
    font-size: 1rem;
    font-weight: 400;
    height: calc(1.5em + 0.75rem + 2px);
    line-height: 1.5;
    padding: 0.375rem 0.75rem;
  }

  button {
    flex-basis: 23%;
    margin-left: 1%;
  }
`

const SearchForm = React.memo<JSX.IntrinsicElements['form']>(({ onSubmit, children }) => (
  <StyledSearchForm onSubmit={onSubmit}>
    <label
      className="sr-only"
      htmlFor="country"
    >
      Country name:
    </label>
    <input
      autoComplete="off"
      name="country"
      id="country"
      list="countries"
      type="text"
    />
    {children}
  </StyledSearchForm>
))

export default SearchForm
