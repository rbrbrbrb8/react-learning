import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

const InfoCardsRow = (props) => {
  const { info } = props;
  return (
    // <Link to="" className="single-date">
    <Grid item container spacing={2} direction="row-reverse">
      {info.map((singleCardInfo, i) => (
        <Grid item key={i} xs={6} lg={3}>
          <Card className="single-card-info">
            <CardContent>
              <Grid item container direction="row" wrap="nowrap">
                <Grid item container alignItems="center" >
                  {singleCardInfo.icon}
                </Grid>
                <Grid item container direction="column" alignItems="center" justifyContent="center">
                  <Grid item>
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