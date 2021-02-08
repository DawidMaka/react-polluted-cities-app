import styled from 'styled-components'

const Button = styled.button`
  background-color: #007bff;
  border: 1px solid #007bff;
  border-radius: 0.25rem;
  color: #fff;
  display: inline-block;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  text-align: center;
  transition: color 0.15s;
  user-select: none;
  vertical-align: middle;

  &:disabled {
    opacity: 0.65;
  }

  &:hover {
    cursor: pointer;
  }
`

export default Button
