import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import InfoCardsRow from './dateInfo/InfoCardsRow';
import DonutGraph from './dateInfo/DonutGraph';
import ColumnsGraph from './dateInfo/ColumnsGraph';
import '../../css/dateInfo.css';
import { Beenhere, DoneAll, Dvr, Event,Grade, Assignment } from '@material-ui/icons';


const DateInfo = (props) => {
  const info = [{
    num:60,
    type:'מזומנים',
    icon:<Event style={{ fontSize: 60 }}/>
  },
  {
    num:52,
    type:'התייצבו',
    icon:<Beenhere style={{ fontSize: 60 }}/>
  },
  {
    num:26,
    type:'בעלי ציון',
    icon:<Grade style={{ fontSize: 60 }}/>
  },
  {
    num:26,
    type:'בעלי שאלון',
    icon:<Dvr style={{ fontSize: 60 ,display:"inline"}}/>
  }
]
  const location = useLocation();
  const {totalEvents} = location.state;
  const [currentEvent,setCurrentEvent] = useState(location.state.currentEvent);
  useEffect(() => {
    // axios.get('/api/dateInfo').then(res => {
    // })
  }, []);
  return ( //consider seperating grid to DateDashboard component
    <div>
      <p>this is Test Date Info</p>
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