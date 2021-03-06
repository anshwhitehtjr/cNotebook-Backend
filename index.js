const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const connectToMongo = require('./db');

app.use(express.json());
app.use(cors());

// Available Routes
app.use('/api/auth', require('./Routes/auth'));
app.use('/api/notes', require('./Routes/note'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${ port }`);
});

connectToMongo();
