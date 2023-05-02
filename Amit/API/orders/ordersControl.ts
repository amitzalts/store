import OrderModel from "./ordersModel";

export const createOrder = async (req:any, res:any) => {
    try {
      const { user, movie, seats } = req.body;
      const orderDB = await OrderModel.create({user, movie, seats});
      
      res.status(201).send({ ok: true, orderDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };





