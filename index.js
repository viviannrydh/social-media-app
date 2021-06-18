const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const helmet=require('helmet');
const morgan=require('morgan');
const userRoute=require('./routes/users');
const authRoute=require('./routes/auth');
const cors=require('cors')

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, }, 
    ()=>{
        console.log('MongoDB is connected, 干杯！')
    }
)

// middle ware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)

app.listen(8800, ()=>{
    console.log('Woohoo, backend server is running perfectly.')
})