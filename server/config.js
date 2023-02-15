import * as dotenv from 'dotenv'
dotenv.config()

export const db = process.env.MONGODB_URI