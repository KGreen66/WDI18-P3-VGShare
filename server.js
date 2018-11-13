const express = require('express');
const app = express();
const routes = require('./backend/routes/index')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//---- tell express to be aware of new static files
app.use(express.static(__dirname + '/client/build/'));

//---- route the index to the client index.html
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

app.use('/', routes)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("OOOOH, it's running on " + PORT);
})