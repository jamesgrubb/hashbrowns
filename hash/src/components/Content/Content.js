import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import airtable from '../../utils/airtable';

const Breadcrumb = styled.h3.attrs({
className: "f7 ttu o-50 dark-green tracked"
})`

`

const Content = styled.article.attrs({
    className: "w-100 vh-100 pa3"
})`
grid-column: 2 / span 1
`
const ContentWrapper = (props) => {

    const [state, setState] = useState({
        records: []
    });

    useEffect(() => {
        airtable(setState)
    },[])
    console.log(state.records)
return(
    
    <React.Fragment>
        {state.records.length > 0 ? (state.records.map((record,index)=>{
           return(
            <Content key={index} id={record.fields["Link"]}>
                <Breadcrumb>{record.fields["Link"]}</Breadcrumb>
            <h1>{record.fields["Title"]}</h1>
            </Content>)
        })) : (<p>Loading</p>)}
    </React.Fragment>
)}

export default ContentWrapper