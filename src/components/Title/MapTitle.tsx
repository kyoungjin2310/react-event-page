import React from "react";
import styled, { css } from "styled-components";

const StyledMapTitle = styled.h2`
  margin-top: 45px;
  margin-bottom: 15px;
  font-size: 20px;
  letter-spacing: -0.5px;
  font-weight: 700;
  color: #000;
  text-shadow: 0px 4px 3px rgba($color: #000, $alpha: 0.2);

  .fontColor {
    color: ${(props: any) => props.color};
  }
`;
function MapTitle({ children, ...rest }: any) {
  return (
    <StyledMapTitle {...rest}>
      <span className="fontColor">{rest.pointText}</span>
      <span>{rest.text}</span>
      {children}
    </StyledMapTitle>
  );
}

MapTitle.defaultProps = {
  color: "#518b0e",
};

export default MapTitle;
