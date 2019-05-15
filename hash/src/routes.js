import React from 'react';
import styled from 'styled-components'
import {NavBar} from './components/NavBar'
import {Route} from 'react-router-dom'
import {Content} from './components/Content'
import 'tachyons';

const Container = styled.div.attrs({
  className : "container w-100 h-100 pa2 bg-light-green mw8"
})`
--grid: minmax(100px, 300px) minmax(15rem, 2fr);
display: grid;
grid-template-columns: var(--grid);
@media all and (max-width:200px){
  --grid: 1fr
}
`

export const Routes = () => {
  return (    
    <Container>
      <NavBar />
      <Content />
      <Route path="/#What" />
      <Route path="/#Where" />
      <Route path="/#When" />
    </Container>    
  );
}

export default Routes;
