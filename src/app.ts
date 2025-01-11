import express from "express"
import cors from "cors"
import router from "./routes/routes.js"
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerDocument = YAML.load('openapi.yml');



const app = express()


app.use(cors({
    origin : "*"
}))

app.use(express.json())

app.use("/api/v1",router)
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app