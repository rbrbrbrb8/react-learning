import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import { Grid, MenuItem } from '@material-ui/core';
import InfoCardsRow from './dateInfo/InfoCardsRow';
import DonutGraph from './dateInfo/DonutGraph';
import ColumnsGraph from './dateInfo/ColumnsGraph';
import '../../css/dateInfo.css';
import { Beenhere, DoneAll, Dvr, Event, Grade, Assignment } from '@material-ui/icons';
import { FormControl, Select, InputLabel } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {changeKenes} from '../../redux/ducks/currentEvent';


const DateInfo = (props) => {
  const location = useLocation();
  const info = [{
    num: 60,
    type: 'מזומנים',
    icon: <Event style={{ fontSize: 60 }} />
  },
  {
    num: 52,
    type: 'התייצבו',
    icon: <Beenhere style={{ fontSize: 60 }} />
  },
  {
    num: 26,
    type: 'בעלי ציון',
    icon: <Grade style={{ fontSize: 60 }} />
  },
  {
    num: 26,
    type: 'בעלי שאלון',
    icon: <Dvr style={{ fontSize: 60, display: "inline" }} />
  }
  ];
  const dispatch = useDispatch()
  const currentEvent = useSelector(state => state.currentEvent.currentEvent);
  const handleCurrentEventChange = (event) => {
    const eventName = event.target.value;
    console.log(event.target.value);
    dispatch(changeKenes(eventName));
    
  };
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
          <MenuItem value='klal'>כנס כלל חמן</MenuItem>
          <MenuItem value='gamma'>כנס גאמא</MenuItem>
          <MenuItem value='shakim'>כנס שחקים</MenuItem>
        </Select>
      </FormControl>
      <Grid container direction="row-reverse" spacing={2}>
        <Grid item container direction="column" xs={8}>
          <Grid item>
            <InfoCardsRow info={info}></InfoCardsRow>
          </Grid>
          <Grid item>
            <ColumnsGraph></ColumnsGraph>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <DonutGraph></DonutGraph>
        </Grid>
      </Grid>
    </div>
  );
}

export default DateInfo;