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
                price: getstats.currentPrice,
	            marketCap: getstats.marketCap,
	            "24hChange": getstats.TwentyFourHourChange
            })
        } catch (error) {
            console.log("Error in get stats api")
            return res.status(500).json({
                message : "Error in getting data"
            })
        }
}
export const getDeviation = async (req : Request, res : Response) : Promise<any> => {
        try {
            const body = req.body
            const data = coinData.safeParse(body)
            if(!data.success) {
                return res.status(400).json({
                    message : "Coin not supported"
                })
            }
            const getDeviation = await Coin.aggregate([
                { $match: { coin: data.data.coin } },
                { $sort: { timestamp: -1 } },
                { $limit: 100 },
                {
                    $group : {
                        _id : "$coin",
                        stdDev : { $stdDevPop : "$currentPrice"}
                    }
                }
            ])
            // console.log(getDeviation)
            return res.status(200).json({
                deviation : getDeviation[0].stdDev
            })
        } catch (error) {
            console.log("Error in get stats api")
            return res.status(500).json({
                message : "Error in getting data"
            })
        }
}

