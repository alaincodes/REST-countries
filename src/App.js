import React, { Suspense } from 'react';
import styled from '@emotion/styled';
import { useTheme } from './ThemeContext';
import CountryDetails from './components/CountryDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import './App.scss';
const CountryCard = React.lazy(() => import('./components/CountryCard'));

const Wrapper = styled('div')`
  background: ${(props) => props.theme.background};

  h1,
  h2,
  p,
  ul,
  li,
  nav,
  button,
  a {
    color: ${(props) => props.theme.body};
  }
`;

export default function App({ filterCountryByRegion }) {
  const themeState = useTheme();

  return (
    <Router>
      <Wrapper>
        <Navbar themeState={themeState} />
        <Switch>
          <Route exact path='/'>
            <Suspense fallback={<div className='loader'></div>}>
              <CountryCard filterCountryByRegion={filterCountryByRegion} />
            </Suspense>
          </Route>
          <Route path='/:id' component={CountryDetails} />
        </Switch>
      </Wrapper>
    </Router>
  );
}
