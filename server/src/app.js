const express=require('express')
const bodyparser=require('body-parser')
const cors = require('cors');
const app=express()

const userRoutes=require('./routes/userRoutes')
const projectRoutes=require('./routes/projectRoutes')
const planRoutes=require('./routes/planRoutes')
const taskRoutes=require('./routes/taskRoutes')
const corsOptions = {
    origin: '*', // Replace with your allowed origin
    methods: 'GET,POST,DELETE',
    credentials: true,
    exposedHeaders: 'Set-Cookie',
  };
app.use(cors(corsOptions));
app.use(bodyparser.json())
app.use('/api/auth',userRoutes)
app.use('/api/project',projectRoutes)
app.use('/api/plan',planRoutes)
app.use('/api/task',taskRoutes)
app.use((error,req,res,next)=>{
    error.statusCode=error.statusCode||500
    error.status=error.status||'error'
    res.status(error.statusCode).json({
        status:error.status,
        message:error.message
    })
})
module.exports=app
