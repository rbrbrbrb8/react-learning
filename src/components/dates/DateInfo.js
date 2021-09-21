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
import { prat, delta, adama, kafbet, hebrew} from '../../redux/ducks/currentEvent';


const DateInfo = (props) => {
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
  const location = useLocation();
  const currentEvent = useSelector(state => state.currentEvent.currentEvent);
  const handleCurrentEventChange = (event) => {
    const eventName = event.target.value;
    switch (eventName) {
      case 'prat':
        dispatch(prat());    
        break;
    
      case 'delta':
        dispatch(delta());
        break;

      case 'kafbet':
        dispatch(kafbet());
        break;

      case 'adama':
        dispatch(adama());
        break;

      case 'hebrew':
        dispatch(hebrew());
        break;
    }
    
  };
  return ( //consider seperating grid to DateDashboard component
    <div>
      <FormControl variant='outlined' className="select-event-form-control">
        <InputLabel id='select-event-label'>Event</InputLabel>
        <Select
          labelId='select-event-label'
          id='select-event'
          value={currentEvent}
          onChange={handleCurrentEventChange}
          label='Event'
        >
          <MenuItem value='prat'>כנס כלל חמן</MenuItem>
          <MenuItem value='delta'>כנס גאמא</MenuItem>
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