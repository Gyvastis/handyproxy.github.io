import React from 'react';
import styled from 'styled-components';
import TwitterIcon from 'components/Footer/TwitterIcon';

const FooterWrapper = styled.div`
  text-align: center;
  border-top: 1px dashed #f1f1f1;
  padding-top: 30px;
  margin-top: 30px;
`;

const A = styled.a`
  text-decoration: none;
  color: inherit;
`;

export default () => (
  <FooterWrapper>
    <a target='_blank' rel='nofollow' href='https://twitter.com/@VaidasBagdonas'><TwitterIcon /></a>
    <br />
    With ❤️<A target="_blank" href="https://vaidasbagdonas.com">Vaidas Bagdonas</A>
  </FooterWrapper>
);
