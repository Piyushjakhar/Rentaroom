const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.use(cors())

require('./routes/property')(app);
require('./routes/user')(app);

app.get('/', (req,res)=> {
    res.send("API is up and running!");
})

app.listen(process.env.PORT || 3000);

