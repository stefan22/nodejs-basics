var express = require("express");

const app = express();
const PORT = 3001;

app.get('/', (req,res) =>
    res.send(`
       
          ${req.method} request,  port: ${PORT}
       
    `)
);

app.listen(PORT, () =>
    console.log(`Express Node server listening on port ${PORT}`)
);
