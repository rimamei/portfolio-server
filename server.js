const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const apiRouter = require('./src/router/apiRouter');

dbConnect();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', apiRouter)

app.listen(PORT, (req, res) => {
    console.log(`App is listening to port ${PORT}`);
})

