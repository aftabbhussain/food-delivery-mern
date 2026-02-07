//Logic to connect to the database
import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://food_del:FU2yJFgqKFKkJEPv@cluster0.olcuvoe.mongodb.net/food-del').then(() => {
        console.log('DB connected');
    });
}
