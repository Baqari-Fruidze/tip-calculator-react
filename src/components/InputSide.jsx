import React from "react";
import Label from "../Ui/Label";
import styled from "styled-components";
import Input from "../Ui/Input";
import Button from "../Ui/Button";

export default function InputSide() {
  const btnsArr = ["5%", "10%", "15%", "25%", "50%"];
  return (
    <StyledForm>
      <InputContainer>
        <Label>Bill</Label>
        <Input type="text" placeholder="0" />
      </InputContainer>
      <InputContainer>
        <Label>Select Tip %</Label>
        <ButtonsContainer>
          {btnsArr.map((item, index) => {
            return <Button key={index}>{item}</Button>;
          })}

          <Input btntype="custom" type="text" placeholder="custom" />
        </ButtonsContainer>
      </InputContainer>

      <InputContainer>
        <Label>Number of People</Label>
        <Input type="text" placeholder="0" />
      </InputContainer>
    </StyledForm>
  );
}
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 11.8rem;
  margin-top: 1rem;
  gap: 1.6rem;
`;
