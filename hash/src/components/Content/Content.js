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
`

const Content = styled.article.attrs({
    className: "w-100 vh-100 pa3"
})`

`
const Url = styled.a.attrs({
    className: "link"
})`
&::after{
    content: "→"
}
`
const Svg = (props) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <clipPath id={props.id} clipPathUnits="objectBoundingBox" transform="scale(0.01)">
                {props.shape}
            </clipPath>
        </svg>
    )
}

const Figure = (props) => {
    return(
        <img src={props.url} alt="" />
    )
}


const ContentWrapper = (props) => {

    const [svg] = useState({
        svg : [
            {
                id: "triangle",
                shape: "<polygon points='0 0 100 0 100 100 0 100'/>" 
            },
            {
                id: "circle",
                shape: "<polygon points='0 0 100 0 100 100 0 100'/>"
            },
            {
                id: "square",
                shape: "<polygon points='0 0 100 0 100 100 0 100'/>"
            }            
        ]
    })

         
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
            <Svg id={svg.svg[index].id} shape={svg.svg[index].shape}/>
            <Mask />
            <Figure url={record.fields['Image']} />
            </Content>)
        })) : (<p>Loading</p>)}
    </Main>
)}

export default ContentWrapper