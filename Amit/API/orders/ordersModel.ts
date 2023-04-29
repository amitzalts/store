import mongoose, { Schema } from "mongoose";


export interface Order{
    userId: string;
    movieId: string;
    seatIds: string[];
}

export const OrderSchema = new Schema({
    userId: String,
    movieId: String,
    seatIds: [String],
});


const OrderModel = mongoose.model<Order>("orders", OrderSchema)
export default OrderModel
