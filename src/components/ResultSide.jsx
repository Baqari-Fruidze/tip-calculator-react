import React from "react";
import styled from "styled-components";
import Button from "../Ui/Button";

export default function ResultSide() {
  return (
    <StyledResult>
      <ResultContainer>
        <div className="tip">
          <p>Tip amount</p>
          <span>/ person</span>
        </div>
        <p className="amount">$0.00</p>
      </ResultContainer>
      <ResultContainer>
        <div className="tip">
          <p>Total</p>
          <span>/ person</span>
        </div>
        <p className="amount">$0.00</p>
      </ResultContainer>
      <Button btntype="reset">reset</Button>
    </StyledResult>
  );
}

const StyledResult = styled.div`
  width: 41rem;
  border-radius: 1.5rem;
  background: #00474b;
  padding: 4rem;
  display: flex;
  flex-direction: column;
`;
const ResultContainer = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:last-child {
    margin-bottom: 0;
  }
  & .tip p {
    color: #fff;
    font-family: "Space Mono";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  & .tip span {
    color: #7f9d9f;
    font-family: "Space Mono";
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  & .amount {
    color: #26c2ae;
    text-align: right;
    font-family: "Space Mono";
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1px;
  }
`;
