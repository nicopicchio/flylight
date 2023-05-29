const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(errorhandler());

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

module.exports = app;