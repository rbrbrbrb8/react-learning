const express = require('express');
const path = require('path');
const colorSchemes = require('./utils/colorSchemes');
const app = express();

const events = [
  {
    start: "2021-09-06",
    title: "כנס כלל חמן",
    backgroundColor: "#2878f7",
    borderColor:"#2878f7",
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
    backgroundColor: "#049c94",
    borderColor:"#049c94",
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
    backgroundColor: "#228b22",
    borderColor:"#228b22",
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
