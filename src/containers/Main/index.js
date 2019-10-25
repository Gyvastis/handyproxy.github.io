import React from 'react';
import styled from 'styled-components';
import fetch from 'node-fetch';
import 'normalize.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Documentation from 'components/Documentation';
import ProxyList from 'components/ProxyList';
import Reason from 'components/Reason';
import Statistics from 'components/Statistics';

const MainWrapper = styled.div`
    margin: 50px auto;
    width: 900px;
`;

const fetchProxyData = () =>
  fetch('https://dl.dropboxusercontent.com/s/6dmeggpks2tr9a8/all.json')
    .then(response => response.json());

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      metadata: [],
      loading: true
    };
  }

  componentWillMount() {
    fetchProxyData().then(({ data, metadata }) => {
      this.setState({
        ...this.state,
        data,
        metadata,
        loading: false
      });
    });
  }

  render() {
    const { data, metadata, loading } = this.state;

    return (
      <MainWrapper>
        <Header />
        <Documentation />
        <ProxyList data={data} loading={loading} />
        <Statistics countryMetadata={metadata.perCountry} />
        <Reason />
        <Footer />
      </MainWrapper>
    );
  }
}

export default Main;
