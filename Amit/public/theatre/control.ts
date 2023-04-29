import { Seat, seatStatus } from "../../API/seats/seatsModel";

function handleSeatsPicking(_rowNumber:string, _seatNumber:string){
    try {
       const seat:Seat = {
            rowNumber: _rowNumber,
            seatNumber: _seatNumber,
            status: {
                type: string,
                enum: seatStatus.FREE,
                default: seatStatus.FREE,
            }
     } 
       console.log("seat", seat)
    } catch (error) {
        console.error(error)
    }
}