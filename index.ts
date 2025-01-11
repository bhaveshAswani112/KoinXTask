import app from "./app.js"
import {port} from "./constant.js"


console.log(port)

app.listen(port || 4000 , () => {
    console.log(`App is listening on port ${port || 4000}`)
})