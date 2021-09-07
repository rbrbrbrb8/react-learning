import React from 'react';
import { Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { createTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'rgb(40, 123, 247)',
    color: 'white'
  }
});

const CalendarHead = () => {
  const classes = useStyles();
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <Grid item container >
      {dayNames.map((dayName, dayI) => (
        <Grid item xs key={dayI}>
              <Card classes={{root:classes.root}}>
                {dayName}
              </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CalendarHead;