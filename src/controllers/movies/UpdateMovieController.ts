import {Request,Response} from "express"
import { UpdateMovieService } from "../../services/movies/UpdateMovieService"

class UpdateMovieController{
    async handle(req:Request,res:Response){
        const {movie_id,title,description,genre_id} = req.body
        const updateMovieService = new UpdateMovieService()
        const movie = await updateMovieService.execute({movie_id,title,description,genre_id})

        return res.json(movie)


        
    }
}

export {UpdateMovieController}
