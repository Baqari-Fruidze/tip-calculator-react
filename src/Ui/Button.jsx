import styled from "styled-components";

const Button = styled.button`
  color: ${(props) =>
    props.btntype === "reset" ? `rgba(0, 71, 75, 1)` : `#fff`};
  text-align: center;
  font-family: "Space Mono";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 5px;
  background: ${(props) =>
    props.btntype === "reset" ? `rgba(13, 104, 109, 1)` : `rgba(0, 71, 75, 1)`};
  border: none;
  padding: 0.5rem;
  width: ${(props) => (props.btntype === "reset" ? `100%` : ``)};
  margin-top: ${(props) => (props.btntype === "reset" ? `auto` : ``)};
`;

export default Button;
