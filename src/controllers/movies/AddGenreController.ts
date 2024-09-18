import {Request,Response} from "express"
import { AddGenreService } from "../../services/movies/AddGenreService"

class AddGenreController{
    async handle(req:Request,res:Response){
        const {name} = req.body
        console.log(name)
        const addGenreService = new AddGenreService()
        const genre = await addGenreService.execute({name})

        return res.json(genre)
    }
}

export {AddGenreController}
