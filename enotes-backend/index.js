const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
require("dotenv").config();


connectToMongo();
const app = express()
const port = process.env.PORT || 8000

const corsConfig = {
  origin: 'https://enotes-sigma.vercel.app',
  methods: ["GET","POST","DELETE","PUT"],
  credentials: true
}
app.options("*",cors(corsConfig));
app.use(cors(corsConfig));
app.use(cors());
app.use(express.json());

//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})