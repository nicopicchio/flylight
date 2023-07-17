const dotenv = require('dotenv')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001

dotenv.config()
app.use(errorhandler())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

const apiRouter = require('./api/api')
app.use('/api', apiRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

module.exports = app;