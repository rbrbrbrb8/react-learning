import React from 'react';
import { Beenhere, DoneAll, Dvr, Event, Grade, Assignment } from '@material-ui/icons';

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
}];

export default info;