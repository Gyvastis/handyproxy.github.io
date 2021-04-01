import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fetch from 'node-fetch';
import 'normalize.css';
import ReactGA from 'react-ga';
import Header from './components/Header';
import Footer from './components/Footer';
import DocumentationHeader from './components/DocumentationHeader';
import DocumentationMiddle from './components/DocumentationMiddle';
import ProxyList from './components/ProxyList';
import Reason from './components/Reason';
import Statistics from './components/Statistics';

const MainWrapper = styled.div`
    margin: 50px auto;
    width: 800px;
`;

const proxyDumpUrl = 'https://raw.githubusercontent.com/HandyProxy/node-proxy-checker/master/output/output.json';
const fetchProxyData = () => fetch(proxyDumpUrl).then(res => res.json());
const fetchLastPingDate = () => fetch('https://api.github.com/repos/HandyProxy/node-proxy-checker/commits').then(res => res.json()).then(commits => commits[0].commit.author.date);

const calculateProxyStats = proxies => {
  const proxyCountries = [];
  proxies.map(proxy => {
    if(proxy.countryCode && proxyCountries.indexOf(proxy.countryCode) < 0) {
      proxyCountries.push(proxy.countryCode);
    }
  });
  proxyCountries.sort();

  let proxyCountPerCountry = {};
  let averagePingPerCountry = {};
  proxyCountries.map(countryCode => {
    const countryProxies = proxies.filter(proxy => proxy.countryCode === countryCode);
    proxyCountPerCountry[countryCode] = countryProxies.length;

    averagePingPerCountry[countryCode] = 0;
    countryProxies.map(proxy => averagePingPerCountry[countryCode] += proxy.responseTime);
    averagePingPerCountry[countryCode] = averagePingPerCountry[countryCode] / proxyCountPerCountry[countryCode];
  });

  return {
    average_ping: averagePingPerCountry,
    proxy_count: proxyCountPerCountry
  };
};

function App() {
  const [ data, setData ] = useState([]);
  const [ meta, setMeta ] = useState({
    average_ping: {},
    proxy_count: {}
  });
  const [ isLoading, setIsLoading ] = useState(false);
  const [ lastPingDate, setLastPingDate ] = useState(null);
  
  useEffect(() => {
    // ReactGA.initialize('UA-39991152-15');
    // ReactGA.pageview(window.location.pathname + window.location.search);
    setIsLoading(true);

    fetchProxyData().then(proxies => {
      setData(proxies);
      setIsLoading(false);
      setMeta(calculateProxyStats(proxies));
    });

    fetchLastPingDate().then(setLastPingDate)
  }, []);
 
  return (
    <MainWrapper>
      <Header />
      <DocumentationHeader {...{ dumpUrl: proxyDumpUrl, lastPingDate }} />
      <ProxyList {...{ data, isLoading }} />
      <DocumentationMiddle />
      <Statistics countryMetadata={meta} />
      <Reason />
      <Footer />
    </MainWrapper>
  );
}

export default App;