import mongoose from "mongoose"

 export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://akhilaanthikkatt95:luminar@cluster0.nak7e.mongodb.net/food-del').then(()=>console.log('DB connected') );
}

