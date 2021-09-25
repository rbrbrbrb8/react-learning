import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DateInfo from './components/dates/DateInfo';
import EventsCalendar from './components/dates/fullCalendar/EventsCalendar';
import './css/calendar.css'


function App() {
  return (
    <div>
      <h1>Welcome to the checkers</h1>
      <Switch>
        <Route path='/DateInfo'>
          <DateInfo/>
        </Route>
        <Route path='/'>
            <EventsCalendar/>
        </Route>
      </Switch>
    </div>

  );
}

export default App;