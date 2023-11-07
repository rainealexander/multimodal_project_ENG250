require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 8080;
const static_path = (path.join(__dirname, '../build'));

const cors = require('cors');
let corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(static_path));

app.get('/', (req, res) => {
    res.sendFile(path.join(static_path, 'index.html'))
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
