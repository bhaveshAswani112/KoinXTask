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
        type : Number,
        required : true
    },
    marketCap : {
        type : Number,
        required : true
    },
    TwentyFourHourChange : {
        type : Number,
        required : true
    }
},{
    timestamps : true
})

coinSchema.index({coin : 1})

export const Coin = mongoose.model("Coin", coinSchema)