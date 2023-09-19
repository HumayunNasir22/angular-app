const express = require('express');
var path = require('path');
const port = process.env.PORT ||3000;
const app = express();

app.use(express.static(path.join(__dirname, 'dist/ng-fundamentals')));

// Define a basic route
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/ng-fundamentals/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log('Server is running ');
  console.log(port);
});
