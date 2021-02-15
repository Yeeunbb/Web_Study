const express = require('express')

const app = express()

// app.use('/js', express.static(__dirname + '/static'));

// app.get('', function(req, res){
//   res.render('index.html');
// })

app.get('', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
  console.log('I love you 3000')
})