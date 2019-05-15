import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import airtable from '../../utils/airtable'
import {HashLink as Link} from 'react-router-hash-link'

const Header = styled.header.attrs({
    className: "flex justify-center"
})`
grid-column: 1 / span 1
`

const NavBar = styled.nav.attrs({
    className: "fixed vh-100 flex items-center justify-center flex-columns m0"
})`
`

const List = styled.ul.attrs({
    className: "flex justify-center justify-around flex-column fw7 ma0 pa0"
})`

`

const ListItem = styled.li.attrs({
    className: "bt bw2 b--dark-gray br--green link list fw7 no-underline pl2 pr3 pt2 dim mv3"
})`
font-family: "Expletus Sans";
writing-mode: vertical-lr
> a{
    text-decoration: none
}
`

const NavWrapper = () => {

    const [state, setState] = useState({
        records : [],
        loading: true
    })
    useEffect(() => {
        airtable(setState)
    },[])
    console.log(`[from the navbar]${state.records}`)
    return(
    <Header>
<NavBar>
    <List>
        {state.records.length > 0 ? (
            state.records.map((record,index) => {
               
               
                return(
                <ListItem key={index}>
                <Link className="dark-gray" smooth to={`/#${record.fields["Link"]}`}>{record.fields["Link"]}</Link>                
                </ListItem>
                )
            })
        ) : (<p>Loading</p>)}

    </List>
</NavBar>
</Header>
)
}

export default NavWrapper

