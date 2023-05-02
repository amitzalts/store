import mongoose, { Schema, Document } from "mongoose";




export interface Seat {
    rowNumber: string;
    seatNumber: string;
    picked: boolean;
}

export const SeatSchema = new Schema({
    rowNumber: String,
    seatNumber: String,
    picked: Boolean,
});


const SeatModel = mongoose.model<Seat>("seats", SeatSchema);

export default SeatModel;