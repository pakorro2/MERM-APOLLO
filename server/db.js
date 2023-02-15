import mongoose from "mongoose"
import { db } from './config.js'

export const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false)
    const conn = await mongoose.connect(db)
    console.log(`Mongodb connected: ${conn.connection.name}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }

}