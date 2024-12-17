const express= require('express');
const app= express();
require('dotenv').config();

// middleware
app.use(express.json());

const port= process.env.PORT || 4000

require('./db/DB');

app.use('/api/posts', require('./routes/post'));

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
})