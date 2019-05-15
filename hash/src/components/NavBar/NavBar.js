import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import airtable from '../../utils/airtable'
import {HashLink as Link} from 'react-router-hash-link'

const NavBar = styled.nav.attrs({
    className: "fixed vh-100 flex justify-around justify-center flex-columns"
})`
grid-column: 1 / span 1;
`

const NavWrapper = () => {

    const [state, setState] = useState({
        records : []
    })
    useEffect(() => {
        airtable(setState)
    },[])
    console.log(state)
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

