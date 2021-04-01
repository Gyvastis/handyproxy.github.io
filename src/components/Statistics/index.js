import React from 'react';
import { Pie, Bar, Bubble } from 'react-chartjs-2';
import Rainbow from 'rainbowvis.js';
import styled from 'styled-components';

const H3 = styled.h3`
  font-size: 18px;
  font-style: italic;
  text-align: center;
  margin-top: 30px;
`;

const P = styled.p`
  text-align: center;
`;

const getRainbowColors = numberOfItems => {
  if(numberOfItems <= 0) {
    return [];
  }

  var rainbow = new Rainbow();
  rainbow.setNumberRange(1, numberOfItems);
  rainbow.setSpectrum('#F4CC70', '#DE7A22');

  const colors = [];

  for (var i = 1; i <= numberOfItems; i++) {
      colors.push('#' + rainbow.colourAt(i));
  }

  return colors;
}

const getTotalProxyCount = (countryMetadata = {}) => {
  let totalProxyCount = 0;

  Object.values(countryMetadata.proxy_count).map(count => totalProxyCount+=parseInt(count));

  return totalProxyCount;
};

const getTotalCountryCount = countryMetadata => {
  let totalCountryCount = 0;

  Object.keys(countryMetadata.proxy_count).map(country => totalCountryCount++);

  return totalCountryCount;
}

export default ({ countryMetadata = {} }) => (
  <div>
    <H3>Sexy stats</H3>
    <P>{getTotalProxyCount(countryMetadata)} proxies in {getTotalCountryCount(countryMetadata)} countries</P>
    <Bar
      data={{
        labels: Object.keys(countryMetadata.average_ping),
        datasets: [{
          data: Object.values(countryMetadata.average_ping),
          backgroundColor: getRainbowColors(Object.keys(countryMetadata.average_ping).length),
        }]
      }}
      options={{
        legend: {
          display: false,
        },
        title: {
            display: true,
            text: 'Average ping per country'
        }
      }}
    />
    <Bar
      data={{
        labels: Object.keys(countryMetadata.proxy_count),
        datasets: [{
          data: Object.values(countryMetadata.proxy_count),
          backgroundColor: getRainbowColors(Object.keys(countryMetadata.proxy_count).length),
        }]
      }}
      options={{
        legend: {
          display: false,
        },
        title: {
            display: true,
            text: 'Proxy count per country'
        }
      }}
    />
  </div>
);
