import React from 'react';
import styled from 'styled-components'
import {HashLink as Link} from 'react-router-hash-link'

const NavBar = styled.nav.attrs({
    className: "fixed vh-100 flex justify-around justify-center flex-columns"
})`
grid-column: 1 / span 1;
`

const NavWrapper = () => {
    return(
<NavBar>
    <ul>
        <li><Link smooth to="/#What">What</Link></li>
        <li><Link smooth to="/#Where">Where</Link></li>
        <li><Link smooth to="/#When">When</Link></li>
    </ul>
</NavBar>
)
}

export default NavWrapper

