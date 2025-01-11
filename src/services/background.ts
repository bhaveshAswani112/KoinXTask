import axios from "axios";
import { api_key } from "../constant.js";
import { Coin } from "../db/dbSchema.js";

export const getPrice = async () => {
    try {
        // console.log("In get Price")
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,matic-network,ethereum",{
            headers : {
                accept: 'application/json',
                'x-cg-demo-api-key': api_key

            }
        })
        const data = response.data
        if(!data){
            return
        }
        // console.log(data)
        data.map(async (coin : any) => {
            await Coin.create({
                coin : coin.id,
                currentPrice : coin.current_price,
                marketCap : coin.market_cap,
                TwentyFourHourChange : coin.price_change_24h
            })
        })

    } catch (error) {
        console.log("Error in get price.")
        console.log(error)
    }
}








