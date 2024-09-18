import {Request,Response} from "express"
import { GetMoviesService } from "../../services/movies/GetMovies"

class GetMoviesController{
    async handle(req:Request,res:Response){
        const getMoviesService = new GetMoviesService()
        const movies = await getMoviesService.execute()
        return res.json(movies)
    }
}

export {GetMoviesController}

