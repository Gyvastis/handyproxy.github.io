import React from 'react';
import styled from 'styled-components';
import fetch from 'node-fetch';
import 'normalize.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import DocumentationHeader from 'components/DocumentationHeader';
import DocumentationMiddle from 'components/DocumentationMiddle';
import ProxyList from 'components/ProxyList';
import Reason from 'components/Reason';
import Statistics from 'components/Statistics';

const MainWrapper = styled.div`
    margin: 50px auto;
    width: 900px;
`;

const fetchProxyData = () =>
  fetch('https://handyproxy.io/api/?token=3386327b3d279510ed832175625be72c&limit=100&format=long')
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
    fetchProxyData().then(({ data }) => {
      this.setState({
        ...this.state,
        data,
        loading: false
      });
    });
  }

  render() {
    const { data, loading } = this.state;
    const metadata = {};

    return (
      <MainWrapper>
        <Header />
        <DocumentationHeader />
        <ProxyList data={data} loading={loading} />
        <DocumentationMiddle />
        <Statistics countryMetadata={metadata.perCountry} />
        <Reason />
        <Footer />
      </MainWrapper>
    );
  }
}

export default Main;
