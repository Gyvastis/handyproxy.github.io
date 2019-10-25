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

export default ({ countryMetadata = {} }) => (
  <div>
    <H3>Sexy stats</H3>
    <Bar
      data={{
        labels: Object.keys(countryMetadata),
        datasets: [{
          data: Object.values(countryMetadata).map(({ping}) => ping.avg),
          backgroundColor: getRainbowColors(Object.keys(countryMetadata).length),
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
        labels: Object.keys(countryMetadata),
        datasets: [{
          data: Object.values(countryMetadata).map(({count}) => count),
          backgroundColor: getRainbowColors(Object.keys(countryMetadata).length),
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
