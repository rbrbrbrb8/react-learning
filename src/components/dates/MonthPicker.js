import React, { useState } from 'react';
import { NavigateNext } from '@material-ui/icons';
import { NavigateBefore } from '@material-ui/icons';
import { Grid } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const MonthPicker = (props) => {
  return (  
      <Grid item container justifyContent="center" alignItems="center">
        <Grid item>
          <IconButton aria-label="previous">
            <NavigateBefore />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography>August</Typography>
        </Grid>
        <Grid item>
          <IconButton>
            <NavigateNext />
          </IconButton>
        </Grid>
      </Grid>
  );
}

export default MonthPicker;