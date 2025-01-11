import app from "./app.js"
import {port} from "./constant.js"
import connectDB from "./db/dbConnection.js"
import { getPrice } from "./services/background.js"
import cron from "node-cron"


// console.log(port)

app.listen(port || 4000 , async () => {
    await connectDB()
    cron.schedule("0 */2 * * *", getPrice, {
        scheduled: true,
        runOnInit : true
    });
    console.log(`App is listening on port ${port || 4000}`)
})