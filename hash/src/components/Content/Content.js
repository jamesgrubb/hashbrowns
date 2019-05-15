import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import airtable from '../../utils/airtable';
import { ReactComponent as Mask } from '../../logo.svg'

const Breadcrumb = styled.h3.attrs({
className: "f7 ttu o-50 dark-green tracked"
})`

`
const Main = styled.main.attrs({
className: ""
})`
grid-column: 2 / span 1
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(6, 1fr)
`

const Content = styled.article.attrs({
    className: "w-100 vh-100 pa3"
})`
grid-column: 1 / -1
`
const Url = styled.a.attrs({
    className: "link"
})`
&::after{
    content: "→"
}
`

const MaskWrapper = styled.div`
grid-column: 3 / -1;
grid-row: 3 / -1
`

const Figure = (props) => {
    return(
        <img src={props.url} alt="" />
    )
}


const ContentWrapper = (props) => {

    
   
   const [state, setState] = useState({
        records: []
    });

    useEffect(() => {
        airtable(setState)
    },[])
    console.log(state.records)

return(
    
    <Main>
        {state.records.length > 0 ? (state.records.map((record,index)=>{
           return(
            <Content key={index} id={record.fields["Link"]}>
                <Breadcrumb>{record.fields["Link"]}</Breadcrumb>
            <h1>{record.fields["Title"]}</h1>
            <p className="dark-green lh-copy">{record.fields["Description"]}</p>
            {record.fields["Url"] ? (<Url href={record.fields["Url"]}>{record.fields["UrlLink"]}</Url>) : null}
            <MaskWrapper>
                <Mask />
            </MaskWrapper>
            <Figure url={record.fields['Image']} />
            </Content>)
        })) : (<p>Loading</p>)}
    </Main>
)}

export default ContentWrapper