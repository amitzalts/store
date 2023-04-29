import OrderModel from "./ordersModel";

export const createOrder = async (req:any, res:any) => {
    try {
      const { userId, movieId, seatId } = req.body;
      const orderDB = await OrderModel.create({userId, movieId, seatId});
      
      res.status(201).send({ ok: true, orderDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };





