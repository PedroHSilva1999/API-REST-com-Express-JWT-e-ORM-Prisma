import prismaClient from "../../prisma";

interface IRequest{
    movie_id:string
}

class RemoveMovieService{
     async execute({movie_id}:IRequest){
        const movie = await prismaClient.movie.delete({
            where:{
                id:movie_id
            }
        })
        return movie
     }   

}

export {RemoveMovieService}