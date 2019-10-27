import React from 'react';
import styled from 'styled-components';
import ReactTable from 'react-table';
import { DateTime, Interval } from 'luxon';
import ReactCountryFlag from "react-country-flag";
import 'react-table/react-table.css';

const ProxyListWrapper = styled.div`
  margin: 20px 0;
`;

const SpeedCell = styled.div`
  position: relative;
`;

const SpeedBarWrapper = styled.div`
  position: absolute;
  width: 100%;
  text-align: left;
  left: 0;
  top: 0;
  background: 0 0;
`;

const SpeedBar = styled.span`
  height: 20px;
  display: inline-block;
  z-index: 5;
  background: ${({width}) => {
    if(width > 70) {
      return '#e00000';
    }
    else if(width > 30) {
      return '#ffd500';
    }
    else {
      return '#79bc00';
    }
  }};
  width: ${({width}) => width}px;
`;

const SpeedText = styled.span`
  z-index: 1;
  position: relative;
  display: inline-block;
  font-size: 14px;
  padding: 2px 0 0 14px;
`;

const maxPing = 5000;

const columns = [
  {
    Header: 'Country',
    accessor: 'country',
    Cell: ({value}) => (
      <span>
        <ReactCountryFlag code={value} svg styleProps={{
          border: '1px solid #f0f0f0',
          marginRight: '5px'
        }} />
        {value}
      </span>
    ),
    width: 80,
  },
  {
    Header: 'IP address',
    accessor: 'ip',
  },
  {
    Header: 'Port',
    accessor: 'port',
    width: 90,
  },
  {
    Header: 'Protocol',
    accessor: 'protocol',
    width: 80,
  },
  {
    Header: 'Anonymity',
    accessor: 'anonymity',
  },
  {
    Header: 'Ping',
    accessor: 'ping',
    width: 90,
    Cell: ({value}) => (
      <SpeedCell>
        <SpeedText>{value} ms</SpeedText>
        <SpeedBarWrapper>
          <SpeedBar width={Math.round(value * 100 / maxPing)} />
        </SpeedBarWrapper>
      </SpeedCell>
    ),
  },
  {
    Header: 'Pinged',
    accessor: 'pinged_at',
  },
];

export default ({ data, loading }) => (
  <ProxyListWrapper>
    <ReactTable
      className='-striped -highlight'
      loading={loading}
      data={data}
      resolveData={data => data.map((dataItem = {}) => ({
        ...dataItem,
        pinged_at: `${dataItem.pinged_at ? Math.round(Interval.fromDateTimes(DateTime.fromISO(dataItem.pinged_at), DateTime.local()).length('minutes')) : '\?'} minutes ago`,
      }))}
      columns={columns}
      pageSize={10}
    />
  </ProxyListWrapper>
);
