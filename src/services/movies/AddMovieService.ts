import prismaClient from "../../prisma";

interface IRequest{
    title:string;
    description:string;
    genre_id:string;
}

class AddMovieService{
    async execute({title,description,genre_id}:IRequest){
        const movie = await prismaClient.movie.create({
            data:{
                title: title,
                description: description,
                genre_id: genre_id
            }
        })
        return movie
    }
}

export {AddMovieService}

