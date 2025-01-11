import mongoose from "mongoose";





const coinSchema = new mongoose.Schema({
    coin : {
        type : String,
        required : true
    },
    versus : {
        type : String,
        default : "usd"
    },
    currentPrice : {
        type : String,
        required : true
    },
    marketCap : {
        type : String,
        required : true
    },
    TwentyFourHourChange : {
        type : String,
        required : true
    }
},{
    timestamps : true
})

coinSchema.index({coin : 1})

export const Coin = mongoose.model("Coin", coinSchema)