import {Request,Response} from "express"
import { AddMovieService } from "../../services/movies/AddMovieService"

class AddMovieController{
    async handle(req:Request,res:Response){
        const {title,description,genre_id} = req.body

        const addMovieService = new AddMovieService()
        const movie = await addMovieService.execute({title,description,genre_id})

        return res.json(movie)
        
    }
}

export {AddMovieController}
