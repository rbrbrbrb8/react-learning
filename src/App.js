import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calendear from './components/dates/Calendear';
import DateInfo from './components/dates/DateInfo';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/DateInfo'>
          <DateInfo/>
        </Route>
        <Route path='/'>
          <div>
            <Calendear/>
          </div>
        </Route>
      </Switch>
    </div>

  );
}

export default App;