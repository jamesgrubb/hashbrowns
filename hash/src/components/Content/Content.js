import React from 'react';
import styled from 'styled-components';

const Content = styled.article.attrs({
    className: "w-100 vh-100 pa4"
})`
grid-column: 2 / span 1
`
const ContentWrapper = (props) => {
return(
<Content id={props.id}>
    {props.children}
    </Content>
    )
}

export default ContentWrapper