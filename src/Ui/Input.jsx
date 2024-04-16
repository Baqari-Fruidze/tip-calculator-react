import styled from "styled-components";
const Input = styled.input`
  border-radius: 5px;
  background: #f3f9fa;
  border: none;
  padding: 1rem;
  text-align: right;
  font-weight: 700;
  font-size: 2.4rem;
  outline: none;
  &,
  &::placeholder {
    color: #00474b;
  }
  /* background-color: ${(props) => (props.as === "custom" ? "red" : "")}; */
`;

export default Input;
