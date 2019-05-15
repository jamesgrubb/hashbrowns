import React, { useState, useEffect } from "react";
import styled from "styled-components";
import airtable from "../../utils/airtable";

const Breadcrumb = styled.h3.attrs({
  className: "f7 ttu o-50 dark-green tracked"
})``;
const Main = styled.main.attrs({
  className: ""
})`
  z-index: 1;
  grid-column: 2 / span 1;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-rows: repeat(6, 1fr); */
`;

const Content = styled.article.attrs({
  className: "w-100 vh-100 pt6 pr6-ns pr3-s"
})`
  grid-column: 1 / -1;
`;
const Url = styled.a.attrs({
  className: "link"
})`
  &::after {
    content: "→";
  }
`;

const ContentWrapper = props => {
  const [state, setState] = useState({
    records: []
  });

  useEffect(() => {
    airtable(setState);
  }, []);
  console.log(state.records);
  console.log(`Prop ${props.match}`);
  return (
    <Main>
      {state.records.length > 0 ? (
        state.records.map((record, index) => {
          return (
            <Content key={index} id={record.fields["Link"]}>
              <Breadcrumb>{record.fields["Link"]}</Breadcrumb>
              <h1 className="dark-gray">{record.fields["Title"]}</h1>
              <p className="dark-green lh-copy">
                {record.fields["Description"]}
              </p>
              {record.fields["Url"] ? (
                <Url className="pink" href={record.fields["Url"]}>
                  {record.fields["UrlLink"]}
                </Url>
              ) : null}
            </Content>
          );
        })
      ) : (
        <p>Loading</p>
      )}
    </Main>
  );
};

export default ContentWrapper;
