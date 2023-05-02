import SeatModel from "./seatsModel"


export const getSeats = async (req:any, res:any) => {
  try {
    const seats = await SeatModel.find({})
    res.send({ seats })
  } catch (error: any) {
    console.error(error)
    res.status(500).send({ error: error.message })
  }
}
  
export const pickOneSeat = async (req:any, res:any) => {
  try {
    const { seat } = req.body
    const seatDB = await SeatModel.findOne({rowNumber:seat.rowNumber, seatNumber: seat.seatNumber})
    if(!seatDB) throw new Error("seat DB not found")

    if(seatDB.picked === true){
      seatDB.picked = false
    }else{
      seatDB.picked = true
    }
    seatDB.save()
    res.send({ seatDB })
  } catch (error: any) {
    console.error(error)
    res.status(500).send({ error: error.message })
  }
}

export const getPickedSeats = async (req:any, res:any) => {
  try {
    const seats = await SeatModel.find({picked: true})
    res.send({ seats })
  } catch (error: any) {
    console.error(error)
    res.status(500).send({ error: error.message })
  }
}