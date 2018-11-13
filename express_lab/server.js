const express = require("express");
const shopping = require('./shopping');
const app = express();
const port = 8888;


app.use(express.json());
app.use('/shopping', shopping);



app.listen(port, () => console.log(`listening on port: ${port}`));
