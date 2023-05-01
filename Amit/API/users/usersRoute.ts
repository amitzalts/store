import express from "express"
const router = express.Router()

import {
  createUser,
  getUser,
  verifyUserLogin,
} from "./usersControl"

router
  .post("/create-user", createUser)
  .put("/get-user", getUser)
  .post("/verify-user-login", verifyUserLogin)
  
  
export default router
