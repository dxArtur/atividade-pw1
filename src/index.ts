import express from 'express'
import { Router, Request, Response } from 'express';
import routes from './routes/Router'
import * as bodyParser from 'body-parser'




const app = express();

//app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json())

app.use(bodyParser.json())


app.use('/', routes)

app.listen(3030, () =>{
  console.log('server running on port 3333')
})

