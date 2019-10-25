import React from 'react';
import styled from 'styled-components';

const Code = styled.code`
  background-color: #f1f1f1;

  a {
    text-decoration: none;
    color: #505050;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const DocumentationWrapper = styled.div`
  text-align: center;
`;

export default () => (
  <DocumentationWrapper>
    <Code>GET <a href='https://rebrand.ly/handyproxy' target='_blank'>https://rebrand.ly/handyproxy</a></Code>
  </DocumentationWrapper>
);
