import OrderModel from "../orders/ordersModel";
import SeatModel from "../seats/seatsModel";
import MovieModel from "./moviesModel";

export enum seatStatus {
  FREE = "free",
  TAKEN = "taken",
}


export const getOneMovie = async (req:any, res:any) => {
  try {
    // const { movieId }= req.body

    // const movie = await MovieModel.findById(movieId)
    // const seats = await SeatModel.find({})
    // const movieOrders = await OrderModel.find({movieId})
    
    // for (const seat of seats){
    //   if(movieOrders.some((order)=> order.seatIds.includes(seat._id as string))){
    //     seat.status = seatStatus.TAKEN
    //   }else{
    //     seat.status = seatStatus.FREE
    //   }
    // }

    // res.send({ movie, seats })
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message })
  }
}



export const getMovies = async (req:any, res:any) => {
  try {
    const movies = await MovieModel.find({});
    res.send({ movies });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

