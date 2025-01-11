import {Router} from "express"
import { getStats, getDeviation } from "../controllers/controller.js"


const router = Router()


router.get("/stats",getStats)
router.get("/deviation",getDeviation)


export default router