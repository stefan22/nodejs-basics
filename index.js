var express = require("express");

const app = express();
const PORT = 3001;

app.get('/', (req,res) =>
    res.send(`Express Node server up and running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Express Node server listening on port ${PORT}`)
);