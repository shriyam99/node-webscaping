const express = require('express');
const path = require('path');
const csv = require('express-csv');

const {giveData} = require('./utils/givedata');
const app = express();
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.get('/download.csv', async (req, res)=>{
  res.send('EDIT server.js');

  var dataObject = await giveData(req.query.search);
  // res.csv(dataObject);
  console.log(dataObject);
});

app.listen(PORT, ()=>{
  console.log(`Server has started on PORT: ${PORT}`);
})
