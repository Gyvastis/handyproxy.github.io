import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const HeaderWrapper = styled.div`
  text-align: center;
  font-weight: bold;
  color: #505050;
  margin-bottom: 20px;
`;

const H1 = styled.h1`
  font-size: 52px;
  margin-bottom: 0;

  a {
    text-decoration: none;
    color: #505050;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Description = styled.span`
  font-size: 20px;
  font-style: italic;
`;

export default () => (
  <HeaderWrapper>
    <Helmet>
      <meta charSet="utf-8" />
      <title>API of fastest public proxies for your bots & scrapers | HandyProxy.io</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
    </Helmet>
    <H1><span role='img' aria-label='promise-emoji'>🤞</span><a href='/'>HandyProxy.io</a></H1>
    <Description>API of fastest public proxies for your bots & scrapers</Description>
  </HeaderWrapper>
);
