import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid } from '@material-ui/core';
import Chart from 'react-apexcharts';
const he = require('apexcharts/dist/locales/he.json');
const ColumnsGraph = (props) => {
  const series = [{
    data: [26, 26, 18, 10, 0, 1, 20, 12, 7, 5, 10, 9, 11, 13, 3, 8]
  }];
  const options = {
    chart: {
      id: 'basic-bar',
      type: 'bar',
      locales: [he],
      defaultLocale: 'he'
    },
    plotOptions: {
      bar: {
        distributed: true,
      }
    },
    xaxis: {
      categories: [
        ['לבדיקה'],
        ['בדיק'],
        ['מבדקון'],
        ['בדיקה','צורת'],
        ['לבדוק'],
        ['כמובן'],
        ['בטוטאל','המקף','לבדיקת'],
        ['סגנון', 'בדיקה'],
        ['טסטינג'],
        ['אנציקלופדי'],
        ['רימון'],
        ['סטיגמה', 'בדיקה'],
        ['בדיקות','סטגימה'],
        ['בדיקת', 'שנה'],
        ['פריז'],
        ['זהב"ם']
      ],
      labels: {
        rotate: 0,
        style: {
          direction: 'rtl',
        }
      }
    },
    legend: {
      show: false
    },

  }
  console.log('testttt');
  return (
    // <Link to="" className="single-date">
    <Grid item>
      <div className="column-chart-div">
        <Chart
          series={series}
          type="bar"
          options={options}
          height={300}
        />
      </div>
    </Grid>
    // </Link>
  );
}

export default ColumnsGraph;