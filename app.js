const express = require('express');
const cors = require('cors');
const messageRoutes = require('./src/routes/messageRoutes');
const integrateSpecRoute =require('./src/routes/integrationSpecRoute')
const bodyParser = require('body-parser');
const morgan = require('morgan');


const app = express();

//add morgan 
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Load routes
app.get('/', (req,res)=>{
    res.json(
        {
            "welcome":"welcome to AUTO EMOJI REPLACER "
        }
    );

});
app.use('/api', messageRoutes);
app.use('/integration-spec', integrateSpecRoute);



module.exports = app;
