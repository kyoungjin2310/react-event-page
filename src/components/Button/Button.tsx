import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: block;
  margin: 41px auto 44px;
  width: 220px;
  height: 40px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 40px;
  letter-spacing: -0.7px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  font-weight: 700;
  background-color: ${(props) => props.color};
  transition: 0.25s ease;

  /* 색상 */
  ${(props) => {
    const selected = props.color;
    return css`
      background: ${selected};
      &:hover,
      &:active {
        background: #fff;
        color: ${selected};
      }
    `;
  }}
`;
function Button({ children, ...rest }: any) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

Button.defaultProps = {
  color: "#d9463e",
};

export default Button;