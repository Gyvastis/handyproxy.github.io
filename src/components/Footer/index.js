import React from 'react';
import styled from 'styled-components';
import TwitterIcon from './TwitterIcon';
import GitHubIcon from './GitHubIcon';

const FooterWrapper = styled.div`
  text-align: center;
  border-top: 1px dashed #f1f1f1;
  padding-top: 30px;
  margin-top: 30px;
`;

const A = styled.a`
  text-decoration: none;
  color: inherit;
  display: inline-block;
`;

export default () => (
  <FooterWrapper>
    <A target='_blank' rel='nofollow' href='https://twitter.com/@VaidasBagdonas'><TwitterIcon /></A>
    <A target='_blank' rel='nofollow' href='https://github.com/HandyProxy'><GitHubIcon /></A>
    <br />
    With ❤️ from <A target="_blank" href="https://vaidasbagdonas.com">Vaidas Bagdonas</A><br />
    Amsterdam
  </FooterWrapper>
);
