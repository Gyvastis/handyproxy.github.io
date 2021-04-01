import React from 'react';
import styled from 'styled-components';

const Code = styled.code`
  background-color: #f1f1f1;
  font-size: 13px;
`;

const DocumentationWrapper = styled.div`
  text-align: center;
`;

export default () => (
  <DocumentationWrapper>
    <p>Example output:</p>
    <Code>{JSON.stringify([{"ip":"109.70.189.75","port":"60282","countryCode":"RU","protocol":"https","anonymity":"anonymous","responseTime":249,"hideIp":true}], null, "\t")}</Code>
    <p>
      Proxy anonimity types:<br />
      <Code>elite</Code> connection looks like a regular client<br />
      <Code>anonymous</Code> no ip is forworded but target site could still tell it's a proxy<br />
      <Code>transparent</Code> ip is forworded and target site would be able to tell it's a proxy<br />
    </p>
    <p>What I am most concerned is the response time, whether or not the proxy modified the content and is the IP being hidden. Having these points in mind, <b>proxies are checked few times a day</b>. </p>
  </DocumentationWrapper>
);
