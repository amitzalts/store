import mongoose, { Schema } from "mongoose";
import { Seat, SeatSchema } from "../seats/seatsModel";
import { Movie, MovieSchema } from "../movies/moviesModel";
import { User, UserSchema } from "../users/usersModel";


export interface Order{
    user: User;
    movie: Movie;
    seat: Seat[];
}

export const OrderSchema = new Schema({
    user: UserSchema,
    movie: MovieSchema,
    seat: [SeatSchema],
});


const OrderModel = mongoose.model<Order>("orders", OrderSchema)
export default OrderModel
