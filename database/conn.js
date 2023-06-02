import mongoose from "mongoose";
const p="mongodb+srv://2020pcecspradeep144:10pp2003@quiz.agfcjtv.mongodb.net/"
export default async function connect(){
    await mongoose.connect(p)
    console.log("Database Connected")
}