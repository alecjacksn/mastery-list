require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')


const app = express();
app.use(bodyParser.json())
app.use(cors())

massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);
})

app.get('/api/master', (req, res, next) => {
    console.log('RES', res)
    req.app.get('db').all_master().then(response => res.status(200).send(response))
})


app.post('/api/editmaster', (req,res,next) => {
    let {name, company, id} = req.body;
    console.log(req.body)
    
    req.app.get('db').update_master(name, company, id)
    .then( () => res.status(200).send() );
})




const port = 3005;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})