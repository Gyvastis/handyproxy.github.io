import React from 'react';
import styled from 'styled-components';
import TwitterIcon from 'components/Footer/TwitterIcon';

const FooterWrapper = styled.div`
  text-align: center;
  border-top: 1px dashed #f1f1f1;
  padding-top: 30px;
  margin-top: 30px;
`;

export default () => (
  <FooterWrapper>
    <a target='_blank' href='https://twitter.com/@VaidasBagdonas'><TwitterIcon /></a>
  </FooterWrapper>
);
