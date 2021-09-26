import React, { useState } from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';



const InfoCardsRow = (props) => {
  const { info,colorScheme } = props;
  const useStyles = makeStyles({
    colored:{
      color:colorScheme[0]
    }
  });
  const classes = useStyles();
  return (
    // <Link to="" className="single-date">
    <Grid item container spacing={2} direction="row-reverse">
      {info.map((singleCardInfo, i) => (
        <Grid item key={i} xs={6} lg={3}>
          <Card className="single-card-info">
            <CardContent>
              <Grid item container direction="row" wrap="nowrap">
                <Grid item container alignItems="center" className={classes.colored} >
                  {singleCardInfo.icon}
                </Grid>
                <Grid item container direction="column" alignItems="center" justifyContent="center">
                  <Grid item className={classes.colored}>
                    <Typography variant="h3" >
                      {singleCardInfo.num}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      {singleCardInfo.type}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}

    </Grid>
    // </Link>
  );
}

export default InfoCardsRow;