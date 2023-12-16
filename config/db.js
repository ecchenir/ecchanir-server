import mongoose from "mongoose";
import colors from 'colors';

const connectDB = async () => {
    // const MONGO_URL = "mongodb://127.0.0.1:27017/EccheNir";

    // mongoose.connect(MONGO_URL, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // });

    // const db = mongoose.connection;

    // db.on("open", () => {
    //     console.log("✅ Connected to MongoDB");
    // });

    // db.on("error", (error) => {
    //     console.error("MongoDB connection error:", error);
    // });

    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected To Mongodb Database ${conn.connection.host}`.bgBlue.black)
    } catch (error) {
        console.log(`Error in Mongodb ${error}
        `.bgRed.black);
    }
};

export default connectDB;