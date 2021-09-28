const colorSchemes = require('./colorSchemes');
const ONE = 1;
const events = [
  {
    start: "2021-09-06",
    title: "כנס כלל חמן",
    backgroundColor: "#2878f7",
    borderColor:"#2878f7",
    classNames:['kenes','klal-haman'],
    extendedProps:{
      selectValue:'klal',
      colorScheme:colorSchemes.klal,
      details:{
        invited:45
      }
      
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
      colorScheme:colorSchemes.gamma,
      details:{
        invited:60,
        came:53,
        haveGrades:24,
        haveSheelon:22
      },
      gradesData:{
        'לבדיקה':ONE * 24,
        'עוד אחד':ONE * 15,
        'נוסף':ONE * 9
      },
      recData:{
        recommended:16,
        unRecommended:6,
        missing:2
      }
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
      colorScheme:colorSchemes.shakim,
      details:{
        invited:100,
        came:96,
        haveGrades:58,
        haveSheelon:58
      },
      recData:{
        recommended:50,
        unRecommended:7,
        missing:1
      }
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
      colorScheme:colorSchemes.lohama,
      details:{}
    }
  }
  //to determine event color on hover, subtract from RED 7, GREEN 24 and BLUE 29
]
module.exports = events;