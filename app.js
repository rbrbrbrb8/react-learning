const express = require('express');
const path = require('path');
const colorSchemes = require('./utils/colorSchemes');
const app = express();

const events = [
  {
    start: "2021-09-06",
    title: "כנס כלל חמן",
    backgroundColor: "#37bbe4",
    borderColor:"#37bbe4",
    classNames:['kenes','klal-haman'],
    extendedProps:{
      selectValue:'klal',
      colorScheme:colorSchemes.klal
    }
  },
  {
    start: "2021-09-09",
    allDay: true,
    title: "כנס גאמא",
    backgroundColor: "#e84135",
    borderColor:"#e84135",
    classNames:['kenes','gamma'],
    extendedProps:{
      selectValue:'gamma',
      colorScheme:colorSchemes.gamma
    }
  },
  {
    start: "2021-09-09",
    allDay: true,
    title: "כנס שחקים",
    backgroundColor: "#45f7ee",
    borderColor:"#45f7ee",
    classNames:['kenes','shakim'],
    extendedProps:{
      selectValue:'shakim',
      colorScheme:colorSchemes.shakim
    }
  },
  {
    start: "2021-09-09",
    allDay: true,
    title: "כנס לוחמה",
    backgroundColor: "#55c91a",
    borderColor:"#55c91a",
    classNames:['kenes','lohama'],
    extendedProps:{
      selectValue:'lohama',
      colorScheme:colorSchemes.lohama
    }
  }
  //to determine event color on hover, subtract from RED 7, GREEN 24 and BLUE 29
]

app.get('/api/getEvents', (req, res) => {
  console.log('caught request')
  res.send(events);
})

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'build')));

app.use('/', function (req, res) {
  return res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});



app.listen(port, () => console.log(
  `App listening at http://localhost:${port}`)
);
