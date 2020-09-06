import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NovoMedico from './medicos/NovoMedico';
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/NovoMedico" exact component={NovoMedico} />
      </Switch>
    </BrowserRouter>
  );
}