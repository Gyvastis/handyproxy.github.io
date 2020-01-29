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
      While building bots, scrapers or any other automated piece software come across the same question time and time again.<br /><br />
      <i>Where do I get some decent proxies for this? </i><Emoji role='img'>😩</Emoji><br /><br />
      If it's a bigger gig you'd want to get private proxies but if it's just a side-gig, something just for fun then you're going through random places searching for those damn proxies, scraping, filtering and checking them.<br /><br />
      I face this myself all the time and I'm happy to say <b>this is the last place we will ever need to go to for public proxies</b>! I'll do the tedious part of collecting, aggregating and checking the proxies.<br /><br />
      Grab them and put them to work! <Emoji role='img'>🧨😁</Emoji> Let me know what's up on Twitter or GitHub!
    </P>
    {/*
    <H3>The future is bright <Emoji role='img'>🥳</Emoji></H3>
    <P>
      <List>
        <li>Checks agains Google, Facebook, etc</li>
        <li>...and hopefully more!</li>
      </List>
    </P>
    */}
  </ReasonWrapper>
);
