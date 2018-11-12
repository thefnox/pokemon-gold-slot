/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import GamePage from 'containers/GamePage/Loadable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  color: #000;
  max-width: 100vmin;
  margin: 0 auto;
  font-family: 'PokemonGB';
`;

export default function App() {
  return (
    <div>
      <AppWrapper>
        <Switch>
          <Route exact path="/" component={GamePage} />
        </Switch>
      </AppWrapper>
      <GlobalStyle />
    </div>
  );
}
