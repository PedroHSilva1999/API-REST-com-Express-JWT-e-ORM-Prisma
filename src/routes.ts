import { Router,Request,Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { AddMovieController } from "./controllers/movies/AddMovieController";
import { AddGenreController } from "./controllers/movies/AddGenreController";
import { RemoveMovieController } from "./controllers/movies/RemoveMovieController";
import { UpdateMovieController } from "./controllers/movies/UpdateMovieController";
import { GetMoviesController } from "./controllers/movies/GetMoviesController";
const router = Router()


router.post("/createUser",new CreateUserController().handle)
router.post("/login",new AuthUserController().handle)

router.post("/addMovie",isAuthenticated,new AddMovieController().handle)
router.get("/getMovies",isAuthenticated,new GetMoviesController().handle)
router.post("/addGenre",isAuthenticated,new AddGenreController().handle)
router.put("/updateMovie",isAuthenticated,new UpdateMovieController().handle)
router.delete("/removeMovie",isAuthenticated,new RemoveMovieController().handle)


export {router}