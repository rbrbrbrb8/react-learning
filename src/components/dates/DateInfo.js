import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, MenuItem } from '@material-ui/core';
import InfoCardsRow from './dateInfo/InfoCardsRow';
import DonutGraph from './dateInfo/DonutGraph';
import ColumnsGraph from './dateInfo/ColumnsGraph';
import '../../css/dateInfo.css';
import { FormControl, Select, InputLabel } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {changeKenes} from '../../redux/ducks/currentEvent';
import info from './dummyInfo/info';

const DateInfo = (props) => {
  const getFromSessionStorage = key => {
    return sessionStorage.getItem(key);
  };

  const dispatch = useDispatch();
  const currentEvent = useSelector(state => ((Object.keys(state.currentEvent.currentEvent)).length ? state.currentEvent.currentEvent : getFromSessionStorage('currentEvent')));
  const dateEventsObj = useSelector(state => ((Object.keys(state.dateEvents.eventsData)).length ? state.dateEvents.eventsData : JSON.parse(getFromSessionStorage('dateEvents'))));
  console.log(`current event: ${currentEvent}`);
  const handleCurrentEventChange = (event) => {
    const eventName = event.target.value;
    console.log(event.target.value);
    dispatch(changeKenes(eventName));
  };

  useEffect(()=>{
    sessionStorage.setItem('dateEvents',JSON.stringify(dateEventsObj));
  },[dateEventsObj]);

  useEffect(()=>{
    sessionStorage.setItem('currentEvent',currentEvent);
  },[currentEvent]);

  return ( //consider seperating grid to DateDashboard component
    <div>
      <FormControl variant='outlined' className="select-event-form-control">
        <InputLabel id='select-event-label'>Event</InputLabel>
        <Select
          labelId='select-event-label'
          id='select-event'
          value={currentEvent || ''}
          onChange={handleCurrentEventChange}
          label='Event'
        >
          {Object.keys(dateEventsObj).map(eventKey => (
            <MenuItem value={eventKey} key={eventKey}>{dateEventsObj[eventKey].displayName}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container direction="row-reverse" spacing={2}>
        <Grid item container direction="column" xs={8}>
          <Grid item>
            <InfoCardsRow info={info} colorScheme={dateEventsObj[currentEvent].colorScheme}></InfoCardsRow>
          </Grid>
          <Grid item>
            <ColumnsGraph colorScheme={dateEventsObj[currentEvent].colorScheme}></ColumnsGraph>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <DonutGraph colorScheme={dateEventsObj[currentEvent].colorScheme}></DonutGraph>
        </Grid>
      </Grid>
    </div>
  );
}

export default DateInfo;