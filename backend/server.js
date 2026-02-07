import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/FoodRoute.js';


//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json())
app.use(cors())

//DB connection
connectDB();

//API endpoints
app.use('/api/food', foodRouter)
//we can access any image from /images/file_name
app.use('/images', express.static('uploads'))

app.get('/', (req, res) => {
    res.send("API Working");
})

app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`);
});

//mongodb+srv://food_del:FU2yJFgqKFKkJEPv@cluster0.olcuvoe.mongodb.net/?