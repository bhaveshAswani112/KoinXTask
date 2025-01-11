import mongoose from "mongoose";
import {db_url, db_name} from "../constant.js"


const connectDB = async () => {
    try {
        await mongoose.connect(db_url + db_name)
        console.log("Database connected successfully.")
    } catch (error) {
        console.log("Error while connecting to database.")
        console.log(error)
        process.exit(0)
    }
}

export default connectDB