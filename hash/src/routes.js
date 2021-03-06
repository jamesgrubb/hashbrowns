import React from "react";
import styled from "styled-components";
import { NavBar } from "./components/NavBar";
import { Route } from "react-router-dom";
import { Content } from "./components/Content";
import { ReactComponent as Fifty } from "./fifty.svg";
import "tachyons";

const Container = styled.div.attrs({
  className: "container w-100 h-100 pa2 bg-light-green mw8 relative"
})`
  --grid: minmax(100px, 300px) minmax(15rem, 2fr);
  display: grid;
  grid-template-columns: var(--grid);
  @media all and (max-width: 200px) {
    --grid: 1fr;
  }
`;
const ContainerBackground = styled.div.attrs({
  className: "fixed vh-100"
})`
  z-index: 0;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-column: 1 / -1;
  > svg {
    filter: url(#displacementFilter);
    --svgGrid: 1 / span 6;
    fill: #e8fdf5;
    width: auto;
    height: 100%;
    grid-row: var(--svgGrid);
    transform: translate(-20vmin, -1vmin) scale(1.1);
    @media all and (max-width: 400px) {
      grid-row: 4 / span 3;
      justify-self: end;
      transform: translate(10vmin, -1vmin) scale(1.1);
    }
  }
`;

export const Routes = () => {
  return (
    <Container>
      <ContainerBackground>
        <Fifty />
      </ContainerBackground>
      <NavBar />
      <Content />
      <Route path="/#What" />
      <Route path="/#What/:name" component={null} />
      <Route path="/#Where" />
      <Route path="/#When" />
    </Container>
  );
};

export default Routes;
