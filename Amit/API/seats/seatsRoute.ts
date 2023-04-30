import express from "express";
const router = express.Router();

import {
  getSeats, 
} from "./seatsControl"

router
  .get("/get-seats", getSeats)

export default router;