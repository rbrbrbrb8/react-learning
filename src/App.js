import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calendar from './components/dates/Calendar';
import DateInfo from './components/dates/DateInfo';
import MobiCalendar from './components/dates/mobiscroll/MobiCalendar';

function App() {
  return (
    <div>
      <h1>Welcome to the checkers</h1>
      <Switch>
        <Route path='/DateInfo'>
          <DateInfo/>
        </Route>
        <Route path='/'>
            <MobiCalendar/>
        </Route>
      </Switch>
    </div>

  );
}

export default App;