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
    <p>Get the <b>API key</b> to your email:</p>
    <Code>GET https://handyproxy.io/api/key/?email=your@real.email</Code>
    <p>All available API filters:</p>
    <Code>GET https://handyproxy.io/api/?token=YOUR_API_KEY&limit=5&protocol=https&anonymity=elite&country=US&max_ping=1000</Code>
    <p>Example output:</p>
    <Code>{JSON.stringify({"data":[{"ip":"109.70.189.75","port":"60282"}]}, null, "\t")}</Code>
    <p>Example output with <Code>&format=long</Code>:</p>
    <Code>{JSON.stringify({"data":[{"ip":"109.70.189.75","port":"60282","country":"RU","protocol":"https","anonymity":"anonymous","ping":249,"pinged_at":"2019:10:26 01:08:44"}]}, null, "\t")}</Code>
  </DocumentationWrapper>
);
