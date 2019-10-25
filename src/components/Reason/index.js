import React from 'react';
import styled from 'styled-components';

const ReasonWrapper = styled.div``;

const H3 = styled.h3`
  font-size: 18px;
  font-style: italic;
  text-align: center;
  margin-top: 30px;
`;

const P = styled.div`
  font-size: 16px;
  line-height: 24px;
  padding: 0 15px;
`;

const List = styled.ul`
`;

const Emoji = styled.span`
  font-size: 24px;
  display: inline-block;
  margin-left: 5px;
  font-style: normal;
`;

export default () => (
  <ReasonWrapper>
    <H3>Motivation. The `why?`</H3>
    <P>
      While building bots, scrapers or other automated piece of virtual being I've often came across the same question:<br />
      <i>Where do I get some decent proxies for this thing?</i><Emoji role='img'>😩</Emoji><br />
      If it's a bigger gig you'd want to get private proxies but if it's just a side-gig, something for fun then you're going through some random places to find those damn proxies.<br />
      I'm happy to say <b>this is the last place we will ever need to go to for public proxies!</b>. I'll do the tedious part of collecting, aggregating and checking the proxies, you can just grab them and put them to work! <Emoji role='img'>🧨😁</Emoji>
    </P>

    <H3>The future is bright <Emoji role='img'>🥳</Emoji></H3>
    <P>
      <List>
        <li>Add more protocols (socks, etc)</li>
        <li>Premium public proxies</li>
        <li>Proxy checks agains Google, Facebook, or any other place where you'd like to have fun</li>
        <li>Residential proxies</li>
        <li>...and hopefully more!</li>
      </List>
    </P>
  </ReasonWrapper>
);
