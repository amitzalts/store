import express from "express"
const router = express.Router()

import {
  createUser,
  getUser,
} from "./usersControl"

router
  .post("/create-user", createUser)
  .get("/get-user", getUser)
  
export default router
