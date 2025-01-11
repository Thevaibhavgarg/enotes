const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
require("dotenv").config();


connectToMongo();
const app = express()
const port = process.env.PORT || 8000

app.use(cors({
  origin: 'https://enotes-sigma.vercel.app', // Allow only this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  credentials: true // If you need to send cookies or authentication credentials
}));

// const corsConfig = {
//   origin: 'https://enotes-sigma.vercel.app',
//   methods: ["GET","POST","DELETE","PUT"],
//   credentials: true
// }
// app.use(cors(corsConfig));
// app.options("*",cors(corsConfig));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   if (req.method === "OPTIONS") {
//     return res.sendStatus(200);
//   }
//   next();
// });
// app.use(cors());
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