import React from 'react';
import styled from 'styled-components';
import ReactTable from 'react-table';
import moment from 'moment';
import ReactCountryFlag from "react-country-flag";
import 'react-table/react-table.css';

const ProxyListWrapper = styled.div`
  margin: 20px 0;
`;

const columns = [
  {
    Header: 'Country',
    accessor: 'country_code',
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
    Header: 'Anonimity',
    accessor: 'anonimity',
  },
  {
    Header: 'Ping (ms)',
    accessor: 'ping',
    width: 90,
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
      resolveData={data => data.map(dataItem => ({
        ...dataItem,
        pinged_at: moment(dataItem.pinged_at).utc('UTC+2').fromNow(),
      }))}
      columns={columns}
    />
  </ProxyListWrapper>
);
