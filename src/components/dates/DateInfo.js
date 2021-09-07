import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import InfoCardsRow from './dateInfo/InfoCardsRow';
import ColumnsGraph from './dateInfo/columnsGraph';
import DonutGraph from './dateInfo/DonutGraph';
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
      <p>this is date info</p>
      <Grid container direction="row" spacing={2}>
        <Grid item container direction="column" lg={8}>
          <Grid item>
            <InfoCardsRow info={info}></InfoCardsRow>
          </Grid>
          <Grid item>
            <p>yesssssssssssss</p>
            {/* <ColumnsGraph></ColumnsGraph> */}
          </Grid>
        </Grid>
        <Grid item lg={4}>
          <p>noooooooooooooooooo</p>
          {/* <DonutGraph></DonutGraph> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default DateInfo;