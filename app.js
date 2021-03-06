const express = require('express');
const path = require('path');
const app = express();
const events = require('./utils/dummyEvents');


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
