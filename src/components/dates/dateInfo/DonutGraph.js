import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid } from '@material-ui/core';
import Chart from 'react-apexcharts';
const he = require('apexcharts/dist/locales/he.json');
const DonutGraph = (props) => {
  const options = {
    chart: {
      id: "basic-donut",
      width:'100%',
      height:'100%',
      locales:[he],
      defaultLocale:'he'
    },
    labels: ['מומלצים', 'לא מומלצים', 'אין ציון'],
    dataLabels: {
      enabled: true,
      formatter: (val,opts) => (val/100)*total,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show:true,
            value:{
              show:true,
            },
            total: {
              show: true,
              showAlways: true,
              label: 'סה"כ',
              fontSize: '22px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              color: '#373d3f',
            }
          }
        }
      }
    },
    states: {
      active: {
        filter: 'none'
      }
    },
    style: {
      direction: 'rtl'
    }
  };
  const series = [40, 10, 2];
  const total = series.reduce((prevVal,currentVal) => prevVal+currentVal,0);
  console.log(total);
  return (
    // <Link to="" className="single-date">
    <Grid item className="donut-graph-container">
        <Chart
          series={series}
          type="donut"
          options={options}
        />
    </Grid>
    // </Link>
  );
}

export default DonutGraph;