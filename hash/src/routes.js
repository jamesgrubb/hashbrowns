import React from 'react';
import styled from 'styled-components'
import {NavBar} from './components/NavBar'
import {Route} from 'react-router-dom'
import {Content} from './components/Content'
import 'tachyons';

const Container = styled.div.attrs({
  className : "container w-100 h-100 pa5 bg-light-green"
})`
--grid: 1fr 2fr;
display: grid;
grid-template-columns: var(--grid);
@media all and (max-width:400px){
  --grid: 1fr
}
`

export const Routes = () => {
  return (    
    <Container>
      <NavBar />
      <Content id="What"><h1>
        What
      </h1></Content>
      <Content id="Where">Where</Content>
      <Content id="When">When</Content>
      <Route path="/#What" />
      <Route path="/#Where" />
      <Route path="/#When" />
    </Container>    
  );
}

export default Routes;
