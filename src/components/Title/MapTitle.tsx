import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledMapTitle = styled.h2`
  margin-top: 45px;
  margin-bottom: 15px;
  font-size: 20px;
  letter-spacing: -0.5px;
  font-weight: 700;
  color: #000;
  text-shadow: 0px 4px 3px rgba($color: #000, $alpha: 0.2);

  .fontColor {
    color: ${(props: MapTitle) => props.color};
  }
`;

type MapTitle = {
  children?: ReactNode;
  pointText: string;
  text: string;
  color?: string;
};

function MapTitle({ children, ...rest }: MapTitle) {
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
