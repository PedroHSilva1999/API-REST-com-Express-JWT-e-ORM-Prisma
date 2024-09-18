import {Request,Response} from "express"
import { RemoveMovieService } from "../../services/movies/RemoveMovieService"

class RemoveMovieController{
    async handle(req:Request,res:Response){
        const {movie_id} = req.body

        const removeMovieService = new RemoveMovieService()
        const movie = await removeMovieService.execute({movie_id})

        return res.json(movie)
    }
}   

export {RemoveMovieController}