import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Characters } from '../../character-collection/character-collection.container';
import { CharacterPage } from '../../character/character.container';

export const RoutesComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Characters />
          </Route>
          <Route path="/character/:id">
            <CharacterPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
