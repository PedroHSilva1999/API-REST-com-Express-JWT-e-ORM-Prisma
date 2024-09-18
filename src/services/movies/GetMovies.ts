import prismaClient from "../../prisma";

class GetMoviesService{
    async execute(){
        const movies = await prismaClient.movie.findMany({
            select:{
            
                title:true,
                description:true,
                genre:{
                    select:{
                        name:true
                    }
                }
            }
        })
        return movies
    }
}

export {GetMoviesService}

