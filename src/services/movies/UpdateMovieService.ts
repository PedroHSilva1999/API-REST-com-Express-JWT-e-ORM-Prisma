import prismaClient from "../../prisma";

interface IRequest{
    movie_id:string
    title:string
    description:string
    genre_id:string
}

class UpdateMovieService{
    async execute({movie_id,title,description,genre_id}:IRequest){
        const movie = await prismaClient.movie.update({
            where:{
                id:movie_id
            },
            data:{
                title: title,
                description: description,
                genre_id: genre_id
            }
        })
    }
}

export {UpdateMovieService}

