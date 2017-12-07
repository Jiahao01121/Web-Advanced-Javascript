const express = require('express')
const app = express()
const restRouter = require('./routes/rest')
const indexRouter = require('./routes/index')
const path = require('path');
//connect mongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://will:will@ds125716.mlab.com:25716/bittiger-oj')

app.use(express.static(path.join(__dirname,'../public/')));
app.use('/api/v1',restRouter);
// app.use('/', indexRouter);

app.use ((req, res) => {
  res.sendFile('index.html',{ root: path.join(__dirname, '../public/') })
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))
