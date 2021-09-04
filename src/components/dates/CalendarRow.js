import { Grid } from '@material-ui/core';
import React from 'react';
import SingleDate from './singleDate/SingleDate';

const CalendarRow = (props) => {
  const {sevenChunk} = props
  return (
    <Grid item container>
      {sevenChunk.map((oneDate,i) => (
        <Grid item key={i} xs>
          <SingleDate date={oneDate}></SingleDate>
        </Grid>
      ))}
    </Grid>
  );
}


export default CalendarRow;