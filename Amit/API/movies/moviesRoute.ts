import express from "express"
const router = express.Router()

import {
  getOneMovie,
  getMovies,

} from "./moviesControl"

router
  .get("/get-one-movie", getOneMovie)
  .get("/get-movies", getMovies)
  

export default router;

