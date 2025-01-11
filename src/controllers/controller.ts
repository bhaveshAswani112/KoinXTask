import {Request,Response} from "express"
import {z} from "zod"
import { Coin } from "../db/dbSchema"


const coinData = z.object({
     coin : z.enum(["bitcoin","matic-network","ethereum"])
})


export const getStats = async (req : Request, res : Response) : Promise<any> => {
        try {
            const body = req.body
            const data = coinData.safeParse(body)
            if(!data.success) {
                return res.status(400).json({
                    message : "Coin not supported"
                })
            }
            const getstats = await Coin.findOne({
                coin : data.data.coin
            }).sort({timestamp : -1})
            if(!getstats) {
               return res.status(400).json({
                    message : "No data found"
               })
            }
            return res.status(200).json({
                price: Number(getstats.currentPrice),
	            marketCap: Number(getstats.marketCap),
	            "24hChange": Number(getstats.TwentyFourHourChange)
            })
        } catch (error) {
            console.log("Error in get stats api")
            return res.status(500).json({
                message : "Error in getting data"
            })
        }
}

