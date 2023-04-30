import SeatModel from "./seatsModel"

//needed????????????????????

export const getSeats = async (req:any, res:any) => {
  try {


    const seats = await SeatModel.find({})
    res.send({ seats })
  } catch (error: any) {
    console.error(error)
    res.status(500).send({ error: error.message })
  }
}
  