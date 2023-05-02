import express from "express";
const router = express.Router();

import {
  getSeats,
  pickOneSeat, 
} from "./seatsControl"

router
  .get("/get-seats", getSeats)
  .post("/pick-one-seat",pickOneSeat)
 

export default router;