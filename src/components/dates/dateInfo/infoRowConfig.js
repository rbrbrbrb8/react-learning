import React from 'react';
import { Beenhere, DoneAll, Dvr, Event, Grade, Assignment } from '@material-ui/icons';

const infoRowConfig = {
  invited: {
    title: 'מזומנים',
    icon: <Event style={{ fontSize: 60 }} />
  },
  came:{
    title: 'התייצבו',
    icon:<Beenhere style={{ fontSize: 60 }} />
  },
  haveGrades:{
    title: 'בעלי ציון',
    icon:<Grade style={{ fontSize: 60 }} />
  },
  haveSheelon:{
    title: 'בעלי שאלון',
    icon: <Dvr style={{ fontSize: 60, display: "inline" }} />
  }
};

export default infoRowConfig;