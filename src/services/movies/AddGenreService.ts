import prismaClient from "../../prisma";

interface IRequest{
    name:string;
}

class AddGenreService{
    async execute({name}:IRequest){
        const genre = await prismaClient.genre.create({
            data:{
                name:name
            }
        })
        return genre
    }
}

export {AddGenreService}
