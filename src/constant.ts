import dotenv from "dotenv"


dotenv.config()

export const port = process.env.PORT
export const api_key = process.env.API_KEY
export const db_url = process.env.DATABASE_URL
export const db_name = process.env.DB_NAME