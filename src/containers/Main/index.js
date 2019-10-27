import React from 'react';
import styled from 'styled-components';
import fetch from 'node-fetch';
import 'normalize.css';
import ReactGA from 'react-ga';
import Header from 'components/Header';
import Footer from 'components/Footer';
import DocumentationHeader from 'components/DocumentationHeader';
import DocumentationMiddle from 'components/DocumentationMiddle';
import ProxyList from 'components/ProxyList';
import Reason from 'components/Reason';
import Statistics from 'components/Statistics';

const MainWrapper = styled.div`
    margin: 50px auto;
    width: 800px;
`;

const fetchProxyData = () =>
  fetch(`${process.env.REACT_APP_API_URL}/?token=${process.env.REACT_APP_API_KEY}&limit=100&format=long`)
    .then(response => response.json());

const fetchProxyStats = () =>
  fetch(`${process.env.REACT_APP_API_URL}/stats?token=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json());

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      meta: {
        average_ping: {},
        proxy_count: {}
      },
      loading: true
    };
  }

  componentWillMount() {
    ReactGA.initialize('UA-39991152-15');
    ReactGA.pageview(window.location.pathname + window.location.search);

    fetchProxyData().then(({ data }) => {
      this.setState({
        ...this.state,
        data,
        loading: false
      });
    });
    fetchProxyStats().then(({ data }) => {
      this.setState({
        ...this.state,
        meta: data,
      });
    });
  }

  render() {
    const { data, meta, loading } = this.state;

    return (
      <MainWrapper>
        <Header />
        <DocumentationHeader />
        <ProxyList data={data} loading={loading} />
        <DocumentationMiddle />
        <Statistics countryMetadata={meta} />
        <Reason />
        <Footer />
      </MainWrapper>
    );
  }
}

export default Main;
