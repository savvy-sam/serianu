import express from 'express';
import dotenv from 'dotenv'
import pool from './models/postgres.js';
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'

const app = express();
dotenv.config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(cors({origin: "http://localhost:5173",})
);
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({extended: true}))


const port = process.env.port || 8000

const testDatabase = async ()=>{
    try {
        await pool.connect();
        console.log('Connected to PostgreSQL database!');
    } catch (error) {
        console.log(error)
    }
}

await testDatabase();

app.use(userRoutes)

app.use((err, req, res, next) => {
  const errorStatus = err.status;
  const errorMessage = err.message;

  return res.status(errorStatus).json(errorMessage);
});


app.listen(port, ()=>{
    console.log(`Backend Running Succesfully on port ${port}`)
})