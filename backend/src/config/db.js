import mongoose from "mongoose"

export const connectDB=async()=>{
    try{
        //hidng the string in .env to make it hidden
        await mongoose.connect(process.env.MONGO_URL)

        console.log("MongoDB conneted sucessfully")
    }catch(error){
        console.error("Error connecting",error)
        process.exit(1)
    }
}