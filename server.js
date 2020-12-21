const express =  require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
