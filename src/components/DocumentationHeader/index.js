import React from 'react';
import styled from 'styled-components';

const Code = styled.code`
  display: block;
  background-color: #f1f1f1;
  font-size: 13px;
  margin-bottom: 3px;
`;

const DocumentationWrapper = styled.div`
  text-align: center;
`;

const getFormattedDate = dateString => {
    const lastPingDate = new Date(dateString);
    lastPingDate.setTime( lastPingDate.getTime() + lastPingDate.getTimezoneOffset()*60*1000 );

    return lastPingDate;
}

export default ({ dumpUrl, lastPingDate }) => (
  <DocumentationWrapper>
    <Code>GET {dumpUrl}</Code>
    <Code>Last pinged at {getFormattedDate(lastPingDate).toISOString()}</Code>
  </DocumentationWrapper>
);
